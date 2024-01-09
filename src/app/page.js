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

    const [data, setData] = useState({});


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
        // get round
        const roundArr = selectedPart.map((e) => ROUND_MAP[e]);

        const newData = { ...data };
        for (const round of roundArr) {
            // request to get question
            const body = processRequestBody(round);
            const res = await fetch("/api/quiz", {
                method: "POST",
                body: JSON.stringify(body),
            });

            const dataRes = await res.json();
            const questions = dataRes.questions;

            newData[round] = questions;
        }

        setData(newData);
    }

    return (
        <div className="relative px-40 ">
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
