import { Button, QnAShow } from '@/components/common/index';
import { GrFormNextLink } from 'react-icons/gr';

 const Result = ({ part, data }) => {
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
                            key={index}
                            question={e.question}
                            answer={e.answer}
                            explain={e.explain}
                            topic={e.topic}
                            type={e.type}
                            index={index}
                        />
                    );
                })}
            </div>
            <div className="flex w-full justify-end">
                {part !== 'Về đích' && (
                    <Button
                        className={'mx-5 flex items-center justify-between'}
                        onClick={() => {
                            window.scrollBy(0, window.innerHeight - 100);
                        }}
                    >
                        Tiếp theo <GrFormNextLink />
                    </Button>
                )}
            </div>
        </section>
    );
}


export default Result;