'use client';
import { useState } from 'react';
import { Button, Tag } from '@/components/common/index';
import { FaRandom } from 'react-icons/fa';
import { TbReload } from 'react-icons/tb';
import Image from 'next/image';
import Img from '../../../public/image.png';

const TopicChoseForPart2 = ({ inputtedTags, dataPart1, topicFP2, setTopicFP2 , getQuestion}) => {
    const [tagsChosen, setTagsChosen] = useState([...inputtedTags]);

    function handleRandom() {
        console.log(tagsChosen);

        const min = 0;

        const max = tagsChosen.length - 1;

        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        setTopicFP2(tagsChosen[randomNum]);
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
                    <Button
                        className={'ml-3'}
                        onClick={() => {
                            setTagsChosen([...inputtedTags]);
                        }}
                    >
                        <TbReload />
                    </Button>

                    <Button className={'ml-1 mr-3'} onClick={handleRandom}>
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
                                    tagValue={e}
                                    tags={tagsChosen}
                                    setTags={setTagsChosen}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="ml-6 mt-2 font-roboto-slab font-bold text-white">
                    Chủ đề được chọn: {topicFP2}
                </div>

                <Button
                    value="Tiếp tục"
                    className="ml-6"
                    onClick={async () => {
                        if (!topicFP2) {
                            alert(
                                'Hãy chọn chủ đề cho phần thi Vượt chướng ngại vật trước nhé!'
                            );
                        } else {
                            await getQuestion();
                            window.scrollBy(0, window.innerHeight - 100);
                        }
                    }}
                />
            </div>

            <div className="right-32 flex h-screen w-2/5 items-center justify-center">
                <Image src={Img} alt={'image'} />
            </div>
        </section>
    );
};

export default TopicChoseForPart2;
