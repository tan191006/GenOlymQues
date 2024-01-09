import { Button, InputCheckbox } from '@/components/common/index';

const PartSelection = ({ selectedPart, setSelectedPart, getQuestion }) => {
    const parts = ["Khởi động", "Vượt chướng ngại vật", "Về đích"];

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
                                value={e}
                                selectedPart={selectedPart}
                                setSelectedPart={setSelectedPart}
                            />
                        );
                    })}
                    <InputCheckbox
                        value={"Chọn tất cả"}
                        selectedPart={selectedPart}
                        setSelectedPart={setSelectedPart}
                        parts={parts}
                    />
                </div>
                <div className="ml-6 pt-2 font-roboto-slab font-medium text-gray-400"></div>
                <Button
                    onClick={async () => {
                        if (!selectedPart.length) {
                            alert(
                                'Hãy chọn vòng thi trước nhé!'
                            );
                        } else {
                            if (!selectedPart.includes("Vượt chướng ngại vật")) {
                                await getQuestion();
                            }
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
