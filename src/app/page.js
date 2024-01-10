'use client';
import { useState } from 'react';
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';
import {
    PartSelection,
    Result,
    TopicChose,
    TopicChoseForPart2
} from "@/components/sections"
import { Button } from '@/components/common/index';
import { ROUND_MAP } from '@/app/enum.js';
const XLSX = require("xlsx");
// import Swal from 'sweetalert2';

const initData = {
    WARM_UP: [
        {
            id: 1,
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
    ],
    OBSTACLE: [
        {
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
    ],
    END: [
        {
            question:
                'Cho hàm số bậc hai y = ax^2 + bx + c. Nếu đỉnh của parabol này là (1, -3) và nó cắt trục y tại điểm có tung độ 2, xác định hệ số a.',
            answer: 'a = 1',
            explain: 'Sử dụng công thức tính đỉnh và điểm cắt trục tung của parabol.',
            topic: 'Toán 12',
        },
    ],
};

export default function Home() {  
    //export data to excel
    const generateWorksheet = (data) => {
        const ws = XLSX.utils.json_to_sheet(data)
        return ws
    }

    const exportData = () => {
        let wb = XLSX.utils.book_new()
        for(const part in data) {
            const ws = generateWorksheet(data[part])
            XLSX.utils.book_append_sheet(wb, ws, part)
        }
        XLSX.writeFile(wb, "Data.xlsx")
    }

    const [inputtedTags, setInputtedTags] = useState([]);
    const [isInput, setIsInput] = useState(false);
    const [topicFP2, setTopicFP2] = useState('');
    const [selectedPart, setSelectedPart] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState(initData || {});

    const processRequestBody = (round) => {
        if (round === "OBSTACLE") {
            return {
                topic: [topicFP2],
                chosenObstacle: topicFP2,
                round,
            }
        }

        return {
            topic: inputtedTags,
            round,
        }
    };


    const getQuestion = async () => {
        // Swal.fire({
        //     title: 'Đang tạo câu hỏi...',
        //     didOpen: () => {
        //         Swal.showLoading()
        //     },
        //     allowOutsideClick: false,
        //     allowEscapeKey: false,
        //     allowEnterKey: false,
        // })
        setIsLoading(true);
        const roundArr = selectedPart.map((e) => ROUND_MAP[e]);

        const newData = { ...data };
        const requestArr = roundArr.map((e) => {
            const body = processRequestBody(e);
            return fetch("/api/quiz", {
                method: "POST",
                body: JSON.stringify(body),
            });
        });

        const resArr = await Promise.all(requestArr);

        // get data
        for (let i = 0; i < resArr.length; i++) {
            const res = resArr[i];

            const dataRes = await res.json();
            const questions = dataRes.questions;
            
            newData[roundArr[i]] = questions;
        }
        setData(newData);
        // Swal.close();

        setIsLoading(false);
    }

    return (
        <div className="relative px-40 ">
            {isLoading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center z-50 opacity-60">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}
            <TopicChose
                inputtedTags={inputtedTags}
                setInputtedTags={setInputtedTags}
                isInput={isInput}
                setIsInput={setIsInput}
            />
            {isInput && (
                <PartSelection selectedPart={selectedPart} setSelectedPart={setSelectedPart} getQuestion={getQuestion} />
            )}
            {isInput && selectedPart.includes("Vượt chướng ngại vật") && (
                <TopicChoseForPart2
                    dataPart1={data.WARM_UP}
                    inputtedTags={inputtedTags}
                    setInputtedTags={setInputtedTags}
                    topicFP2={topicFP2}
                    setTopicFP2={setTopicFP2}
                    getQuestion={getQuestion}
                />
            )}
            {data.WARM_UP && <Result part="Khởi động" data={data.WARM_UP} />}
            {data.OBSTACLE && <Result part={`Vượt chướng ngại vật: ${topicFP2}`} data={data.OBSTACLE} />}
            {data.END && <Result part="Về đích" data={data.END} />}
            <div className="fixed bottom-0 right-0 left-0 flex justify-between items-center px-10 py-5">
                <div className='flex'>
                    <Button
                        onClick={() => {
                            window.scrollBy(0, window.innerHeight - 100);
                        }}
                    >
                        <FaRegArrowAltCircleDown />
                    </Button>

                    <Button
                        onClick={() => {
                            window.scrollBy(0, -window.innerHeight + 100);
                        }}
                    >
                        <FaRegArrowAltCircleUp />
                    </Button>
                </div>
                
                {Object.keys(data).length && <Button className={"ml-5"} onClick={exportData}>Tải xuống</Button>}
            </div>

        </div>
    );
}
