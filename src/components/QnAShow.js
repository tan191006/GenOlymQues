import { IoReloadOutline } from 'react-icons/io5';

export function QnAShow({ question, answer, topic, type, index }) {
    return (
        <div
            className={
                'mb-5 flex border-b-2 border-t-2 border-gray-500 py-5 font-roboto-slab font-bold'
            }
        >
            <div
                className={
                    'flex w-1/2 items-center border-r-2 border-white px-2'
                }
            >
                <div className={'flex w-4/5'}>
                    <span className={'pr-1 text-primary'}>{index + 1}, </span>
                    {question}
                </div>
                {type && (
                    <div
                        className={
                            'ml-3 flex h-10 items-center justify-center rounded border-2 border-primary px-3'
                        }
                    >
                        {type}
                    </div>
                )}
            </div>

            <div className={'flex w-1/2 items-center justify-between px-2'}>
                <div className={'w-2/5'}>{answer}</div>
                <div
                    className={
                        'flex items-center justify-center overflow-hidden rounded border-2 border-primary px-10'
                    }
                >
                    {topic}
                </div>
                <button
                    className={
                        'flex h-10 w-10 items-center justify-center rounded border-2 border-primary text-2xl text-primary'
                    }
                >
                    <IoReloadOutline />
                </button>
            </div>
        </div>
    );
}
