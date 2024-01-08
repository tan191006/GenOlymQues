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
const XLSX = require("xlsx");

const data = {
    part1: [
        {
            id: 1,
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
        {
            id: 2,
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
        {
            id: 3,
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
        {
            id: 4,
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
    ],
    part2: [
        {
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
        {
            question:
                'What is the difference between RAM and ROM in a computer system?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
        {
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
        {
            question:
                'What is the difference between RAM and ROM in a computer system?',
            answer: 'Lorem lorem',
            topic: 'HTML',
        },
    ],
    part3: [
        {
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
            type: '30',
        },
        {
            question:
                'What is the difference between RAM and ROM in a computer system?',
            answer: 'Lorem lorem',
            topic: 'HTML',
            type: '20',
        },
        {
            question:
                'What is the role of a firewall in computer security?',
            answer: 'Lorem lorem',
            topic: 'HTML',
            type: '30',
        },
        {
            question:
                'What is the difference between RAM and ROM in a computer system?',
            answer: 'Lorem lorem',
            topic: 'HTML',
            type: '20',
        },
    ],
    part4: [
        {
            question:
                'Cho hàm số bậc hai y = ax^2 + bx + c. Nếu đỉnh của parabol này là (1, -3) và nó cắt trục y tại điểm có tung độ 2, xác định hệ số a.',
            answer: 'a = 1',
            explain: 'Sử dụng công thức tính đỉnh và điểm cắt trục tung của parabol.',
            topic: 'Toán 12',
        },
        {
            question:
                'Cho hàm số bậc hai y = ax^2 + bx + c. Nếu đỉnh của parabol này là (1, -3) và nó cắt trục y tại điểm có tung độ 2, xác định hệ số a.',
            answer: 'a = 1',
            explain: 'Sử dụng công thức tính đỉnh và điểm cắt trục tung của parabol.',
            topic: 'Toán 12',
        },
        {
            question:
                'Cho hàm số bậc hai y = ax^2 + bx + c. Nếu đỉnh của parabol này là (1, -3) và nó cắt trục y tại điểm có tung độ 2, xác định hệ số a.',
            answer: 'a = 1',
            explain: 'Sử dụng công thức tính đỉnh và điểm cắt trục tung của parabol.',
            topic: 'Toán 12',
        },
        {
            question:
                'Cho hàm số bậc hai y = ax^2 + bx + c. Nếu đỉnh của parabol này là (1, -3) và nó cắt trục y tại điểm có tung độ 2, xác định hệ số a.',
            answer: 'a = 1',
            explain: 'Sử dụng công thức tính đỉnh và điểm cắt trục tung của parabol.',
            topic: 'Toán 12',
        },
        {
            question:
                'Cho hàm số bậc hai y = ax^2 + bx + c. Nếu đỉnh của parabol này là (1, -3) và nó cắt trục y tại điểm có tung độ 2, xác định hệ số a.',
            answer: 'a = 1',
            explain: 'Sử dụng công thức tính đỉnh và điểm cắt trục tung của parabol.',
            topic: 'Toán 12',
        },
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

    // input tags
    const [inputtedTags, setInputtedTags] = useState([]);
    // input tags set Done
    const [isInput, setIsInput] = useState(false);
    // part 2 topic
    const [topicFP2, setTopicFP2] = useState('');
    // select part to generate
    const [selectedPart, setSelectedPart] = useState([])

    return (
        <div className="relative px-40 ">
            <TopicChose
                inputtedTags={inputtedTags}
                setInputtedTags={setInputtedTags}
                isInput={isInput}
                setIsInput={setIsInput}
            />
            {isInput && (
                <PartSelection selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
            )}
            {isInput && selectedPart.includes("Vượt chướng ngại vật") && (
                <TopicChoseForPart2
                    dataPart1={data.part1}
                    inputtedTags={inputtedTags}
                    setInputtedTags={setInputtedTags}
                    topicFP2={topicFP2}
                    setTopicFP2={setTopicFP2}
                />
            )}
            {data.part1 && <Result part="Khởi động" data={data.part1} />}
            {data.part2 && <Result part={`Vượt chướng ngại vật: ${topicFP2}`} data={data.part2} />}
            {data.part3 && <Result part="Tăng tốc" data={data.part3} />}
            {data.part4 && <Result part="Về đích" data={data.part4} />}
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
