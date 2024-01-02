import { QnAShow } from '@/components/QnAShow';
import { Button } from '@/components/Button';

export function Result({ part, data }) {
    return (
        <section
            id={part}
            className={
                'flex h-screen w-full flex-col justify-center px-20 py-10'
            }
        >
            <h1
                className={
                    'ml-4 pb-5 text-start font-roboto-slab text-5xl font-bold text-primary'
                }
            >
                {part}
            </h1>

            <div
                className={
                    'my-2 max-h-[60%] w-full overflow-auto px-2 text-white'
                }
            >
                {data.map((e, index) => {
                    return (
                        <QnAShow
                            question={e.question}
                            answer={e.answer}
                            topic={e.topic}
                            type={e.type}
                            index={index}
                        />
                    );
                })}
            </div>
        </section>
    );
}
