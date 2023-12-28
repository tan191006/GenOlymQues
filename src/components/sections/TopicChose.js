"use client"
import { useState } from "react"
import { Button } from "../Button"
import { Tag } from "../Tag"
import { TagsInput } from "../TagsInput"
import Image from "next/image";
import Img from "../../../public/image.png";

export function TopicChose () {

    const [tags, setTags] = useState([]);

    const [rcmTags, setRcmTags] = useState(["CSS", "JS"])
    
    function handleTagClick (tagValue) {

        if(tags.includes(tagValue)) {
            alert("This tag was added!")
        }
        else {
            setTags([...tags, tagValue])
        }

    }

    return (
        <section id={"topic-chose"} className="h-screen w-full flex justify-center items-center">

            <div className="w-1/2 flex flex-col items-start overflow-hidden">
                
                <h2 className="text-2xl font-bold mb-2 font-roboto-slab">1, Đầu tiên, hãy chọn chủ đề bạn muốn nhé</h2>

                <div className="w-full border-b-2 ml-4 py-2">

                    {tags.map((e) => {
                        return (
                            <Tag tag={e} bg={"bg-yellow-400"} tags={tags} setTags={setTags} />
                        )
                    })}

                    <TagsInput tags={tags} setTags={setTags} />

                </div>

                {/* List recommend tags */}
                <div className="w-full mt-3 ml-4 flex overflow-auto">
                    {rcmTags.map((e, index) => {
                        return (
                            <div key={index} onClick={() => handleTagClick(e)}>
                                <Tag tag={e} bg={"bg-white"} tags={rcmTags} setTags={setRcmTags} />
                            </div>
                        )
                    })}
                </div>

                <a href={"#topic-chose-part-2"}>
                    <Button
                        value="Next"
                        className="ml-4"
                    />
                </a>

            </div>

            <div className="h-screen w-2/5 flex justify-center items-center">
                <Image src={Img} alt={"image"} />
            </div>

        </section>
    )
}