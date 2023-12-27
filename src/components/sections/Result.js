import {QnAShow} from "@/components/QnAShow";
import {Button} from "@/components/Button";

export function Result ({ part, data }) {

    return (
        <section id={part} className={"h-screen w-full py-10 px-20 flex flex-col justify-center"}>
            <h1 className={"pb-5 text-start text-5xl font-bold font-roboto-slab"}>{part}</h1>

            <div className={"w-full my-2 max-h-[60%] px-2 overflow-auto"}>
                {data.map((e, index) => {
                    return (
                        <QnAShow question={e.question} answer={e.answer} topic={e.topic} type={e.type} index={index} />
                    )
                })}
            </div>

            <a className={"flex justify-between"}>
                <Button value={"Download"} />
                    <Button value={"Next part"} />
            </a>


        </section>
    )
}