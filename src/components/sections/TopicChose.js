"use client"
import { useState } from "react"
import { Tag } from "../Tag"
import { TagsInput } from "../TagsInput"
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useCallback, useMemo } from "react";
import { Button } from "../Button";

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

  const options = useMemo(() => {
    return {
      background: {
        color: "#121212", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        number: {
            value: 100,
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 150, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 1 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

    return (
        <section id={"topic-chose"} className="z-7 h-screen w-full flex justify-center items-center">

            <div className="w-[800px] p-20 rounded-lg flex flex-col items-start overflow-hidden">
                
                <h2 className="text-3xl font-bold mb-2 font-roboto-slab text-primary">1, Đầu tiên, hãy chọn chủ đề bạn muốn nhé</h2>

                <div className="w-full border-b-2 ml-4 py-2">
                    {tags.map((e) => {
                        return (
                            <Tag tag={e} bg={"bg-yellow-400"} tags={tags} setTags={setTags} />
                        )
                    })}
                    <TagsInput tags={tags} setTags={setTags} />
                </div>
                <div className="text-gray-400 ml-5 pt-2 font-roboto-slab font-medium">Enter để thêm mới chủ đề</div>

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

                <Button className={"ml-4"} value={"OK"} onClick={() => {
                    if(tags.length) {
                        window.scrollTo(0, 700)
                    }
                    else {
                        alert("Bạn hãy thêm chủ đề đã nhé!")
                    }
                }} />
            </div>
            <Particles id={"tsparticles"} init={particlesInit} options={options} />
        </section>
    )
}