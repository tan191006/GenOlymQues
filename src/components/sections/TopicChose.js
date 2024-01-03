'use client';
import { useState } from 'react';
import { Tag } from '../Tag';
import { TagsInput } from '../TagsInput';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // loads tsparticles-slim
import { useCallback, useMemo } from 'react';
import { Button } from '../Button';

export function TopicChose({ tags, setTags, isInput, setIsInput }) {

    const [rcmTags, setRcmTags] = useState([]);

    function handleTagClick(tagValue) {
        if (tags.includes(tagValue)) {
            alert('Chủ đề này đã được thêm!');
        } else {
            setTags([...tags, tagValue]);
        }
    }

    // Particles background ------------------------------------
    const options = useMemo(() => {
        return {
            background: {
                color: '#121212', // this sets a background color for the canvas
            },
            fullScreen: {
                enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true, // enables the hover event
                        mode: 'repulse', // make the particles run away from the cursor
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
    // Particles background --------------------------------------

    

    return (
        <section
            className="z-7 flex h-screen w-full items-center justify-center"
        >
            <div className="flex w-[800px] flex-col items-start overflow-hidden rounded-lg p-20">
                <h2 className="mb-2 font-roboto-slab text-3xl font-bold text-primary">
                    1, Đầu tiên, hãy chọn chủ đề bạn muốn nhé
                </h2>

                <div className="ml-4 w-full border-b-2 py-2">
                    {tags.map((e, index) => {
                        return (
                            <Tag
                                key={index}
                                tag={e}
                                bg={'bg-yellow-400'}
                                tags={tags}
                                setTags={setTags}
                                input
                                setIsInput={setIsInput}
                            />
                        );
                    })}
                    <TagsInput tags={tags} setTags={setTags} setIsInput={setIsInput} />
                </div>
                <div className="ml-5 pt-2 font-roboto-slab font-medium text-gray-400">
                    Enter để thêm mới chủ đề
                </div>

                {/* List recommend tags */}
                {rcmTags && <div className="ml-4 mt-3 flex w-full overflow-auto">
                    {rcmTags.map((e, index) => {
                        return (
                            <div key={index} onClick={() => handleTagClick(e)}>
                                <Tag
                                    tag={e}
                                    bg={'bg-white'}
                                    tags={rcmTags}
                                    setTags={setRcmTags}
                                />
                            </div>
                        );
                    })}
                </div>}

                <Button
                    className={'ml-4'}
                    value={'OK'}
                    onClick={() => {
                        if (tags.length) {
                            setIsInput(true)
                            setTimeout(() => {window.scrollTo(0, window.innerHeight - 100)}, 100)
                           
                        }
                        else {
                            alert('Bạn hãy thêm chủ đề đã nhé!');
                        }
                    }}
                />
            </div>
            <Particles
                id={'tsparticles'}
                init={particlesInit}
                options={options}
            />
        </section>
    );
}
