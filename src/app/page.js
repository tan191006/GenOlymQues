'use client';
import { useState } from 'react';
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';
import { TopicChose } from '@/components/sections/TopicChose';
import { TopicChoseForPart2 } from '@/components/sections/TopicChoseForPart2';
import { Result } from '@/components/sections/Result';
import { Button } from '@/components/Button';
const XLSX = require("xlsx");

export default function Home() {
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
    };


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
    const [tags, setTags] = useState([]);
    // input tags set Done
    const [isInput, setIsInput] = useState(false);
    // part 2 topic
    const [topicFP2, setTopicFP2] = useState('');

    return (
        <div className="relative px-40 ">
            <TopicChose
                tags={tags}
                setTags={setTags}
                isInput={isInput}
                setIsInput={setIsInput}
            />
            {isInput && (
                <TopicChoseForPart2
                    dataPart1={data.part1}
                    tags={tags}
                    setTags={setTags}
                    topicFP2={topicFP2}
                    setTopicFP2={setTopicFP2}
                />
            )}
            {data.part1 && <Result part="Part 1" data={data.part1} />}
            {data.part2 && <Result part={`Part 2: ${topicFP2}`} data={data.part2} />}
            {data.part3 && <Result part="Part 3" data={data.part3} />}
            {data.part4 && <Result part="Part 4" data={data.part4} />}
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
                
                {Object.keys(data).length && <Button className={"ml-5"} onClick={exportData}>Download</Button>}
            </div>

        </div>
    );
}
