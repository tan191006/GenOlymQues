import {IoReloadOutline} from "react-icons/io5";

export function QnAShow ({ question, answer, topic, type, index }) {

    return (
        <div className={"flex py-5 mb-5 border-t-2 border-b-2 border-gray-500 font-roboto-slab font-bold"}>
            <div className={"flex w-1/2 px-2 border-r-2 border-black items-center"}>
                <div className={"flex w-4/5"}>
                    <span className={"pr-1"}>{index + 1}, </span>{question}
                </div>
                {type && <div className={"rounded border-2 border-primary flex items-center justify-center px-3 ml-3 h-10"}>{type}</div>}
            </div>

            <div className={"w-1/2 px-2 flex justify-between items-center"}>
                <div className={"w-2/5"}>{answer}</div>
                <div className={"px-10 overflow-hidden rounded border-2 border-primary flex items-center justify-center"}>{topic}</div>
                <button className={"text-2xl text-primary rounded border-2 border-primary w-10 h-10 flex items-center justify-center"}><IoReloadOutline /></button>
            </div>

        </div>
    )
}