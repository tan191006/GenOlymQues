import {IoReloadOutline} from "react-icons/io5";

export function QnAShow ({ question, answer, topic, type, index }) {

    return (
        <div className={"flex py-5 mb-5 border-t-2 border-b-2 border-black font-roboto-slab font-bold"}>
            <div className={"flex w-1/2 px-2 border-r-2 border-black"}>
                <div className={"flex w-4/5"}>
                    <span className={"pr-1"}>{index + 1}, </span>{question}
                </div>
                {type && <div className={"rounded border-2 border-black flex items-center justify-center px-3 ml-3 h-10"}>{type}</div>}
            </div>

            <div className={"w-1/2 px-2 flex justify-between"}>
                <div className={"w-2/5"}>{answer}</div>
                <div className={"w-2/5 overflow-hidden"}>{topic}</div>
                <button className={"text-2xl"}><IoReloadOutline /></button>
            </div>

        </div>
    )
}