'use client';
import { useState } from 'react';
import { Button } from '../Button';
import { Tag } from '../Tag';
import Image from 'next/image';
import Img from '../../../public/image.png';
import { FaRandom } from 'react-icons/fa';
export function TopicChoseForPart2({ tags, dataPart1, topicFP2, setTopicFP2 }) {
    const [tagsChosen, setTagsChosen] = useState([...tags]);

    function handleRandom() {
        const min = 0;

        const max = tagsChosen.length - 1;

        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        setTopicChosen(tags[randomNum]);
    }

    function handleChose(e) {
        setTopicFP2(e);
    }

    return (
        <section className="flex h-screen w-full items-center justify-center ">
            <div className="flex w-1/2 flex-col items-start overflow-hidden">
                <h2 className="mb-2 font-roboto-slab text-2xl font-bold text-primary">
                    2, Chọn chủ đề cho phần thi Vượt chướng ngại vật
                </h2>

                <div className="ml-3 flex w-full items-center overflow-auto">
                    <Button className={'mx-3'} onClick={handleRandom}>
                        <FaRandom />
                    </Button>

                    {tagsChosen.map((e, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    handleChose(e);
                                }}
                            >
                                <Tag
                                    bg={'bg-white'}
                                    tag={e}
                                    tags={tagsChosen}
                                    setTags={setTagsChosen}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="ml-4 mt-2 font-roboto-slab font-bold text-white">
                    Chủ đề được chọn: {topicFP2}
                </div>

                <Button
                    value="Generate"
                    className="ml-4"
                    onClick={() => {
                        if (!topicFP2) {
                            alert(
                                'Hãy chọn chủ đề cho phần thi Vượt chướng ngại vật trước nhé!'
                            );
                        } else if (dataPart1) {
                            scrollBy(0, window.innerHeight - 100);
                        }
                    }}
                />
            </div>

            <div className="right-32 flex h-screen w-2/5 items-center justify-center">
                <Image src={Img} alt={'image'} />
            </div>
        </section>
    );
}
