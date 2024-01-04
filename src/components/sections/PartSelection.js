import { Button, InputCheckbox } from '@/components/common/index';

const PartSelection = ({ selectedPart, setSelectedPart }) => {
    const parts = [
        {
            id: 1,
            name: 'Khởi động',
        },
        {
            id: 2,
            name: 'Vượt chướng ngại vật',
        },
        {
            id: 3,
            name: 'Tăng tốc',
        },
        {
            id: 4,
            name: 'Về đích',
        },
    ];

    return (
        <section className="flex h-screen w-full items-center justify-center ">
            <div className="flex flex-col items-start overflow-hidden">
                <h2 className="mb-2 font-roboto-slab text-2xl font-bold text-primary">
                    2, Chọn vòng thi mà bạn muốn tạo câu hỏi nhé
                </h2>
                <div className="ml-6 mt-2 flex flex-col space-y-2">
                    {parts.map((e, index) => {
                        return (
                            <InputCheckbox
                                key={index}
                                value={e.name}
                                selectedPart={selectedPart}
                                setSelectedPart={setSelectedPart}
                            />
                        );
                    })}
                </div>
                <div className="ml-6 pt-2 font-roboto-slab font-medium text-gray-400"></div>
                <Button
                    onClick={() => {
                        if (!selectedPart.length) {
                            alert(
                                'Hãy chọn vòng thi trước nhé!'
                            );
                        } else {
                            scrollBy(0, window.innerHeight - 100);
                        }
                    }}
                    className={'ml-6'}
                    value={'Tiếp theo'}
                />
            </div>
        </section>
    );
};

export default PartSelection;
