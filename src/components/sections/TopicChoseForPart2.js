"use client"
import { useState } from "react"
import { Button } from "../Button"
import { Tag } from "../Tag"
import Image from "next/image";
import Img from "../../../public/image.png"
import { FaRandom } from "react-icons/fa";
export function TopicChoseForPart2 () {

    const [tags, setTags] = useState(["HTML", "CSS", "JS"]);

    const [topicChosen, setTopicChosen] = useState("")

    function handleRandom () {

        const min = 0;

        const max = tags.length -1;

        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        setTopicChosen(tags[randomNum]);

    }

    function handleChose (e) {
        setTopicChosen(e);
    }

    return (
        <section id={"topic-chose-part-2"} className="h-screen w-full flex justify-center items-center ">

            <div className="w-1/2 flex flex-col items-start overflow-hidden">

                <h2 className="text-2xl font-bold mb-2 font-roboto-slab text-white">2, Chọn chủ đề cho phần thi Vượt chướng ngại vật</h2>

                <div className="w-full mt-3 ml-4 flex overflow-auto items-center">

                    <Button className={"mr-3"} onClick={handleRandom}><FaRandom /></Button>

                    {tags.map((e, index) => {
                        return (
                            <div key={index} onClick={() => {handleChose(e)}}>
                                <Tag bg={"bg-white"} tag={e} tags={tags} setTags={setTags} />
                            </div>
                        )
                    })}


                </div>

                <div className="ml-4 mt-2 font-bold font-roboto-slab text-white">Chủ đề được chọn: {topicChosen}</div>

                <Button
                    value="Generate"
                    className="ml-4"
                />

            </div>

            <div className="right-32 h-screen w-2/5 flex justify-center items-center">
                <Image src={Img} alt={"image"} />
             </div>

        </section>
    )
}