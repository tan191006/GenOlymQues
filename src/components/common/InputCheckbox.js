
const InputCheckbox = ({ value, selectedPart, setSelectedPart }) => {

    const handleClick = () => {
        setSelectedPart(prev => {
            if(selectedPart.includes(value)) {
                return selectedPart.filter(part => part !== value)
            }
            else {
                return [...prev, value]
            }
        })
    }

    return (
        <div onClick={handleClick} className={`p-3 rounded ${selectedPart.includes(value) ? 'bg-primary' : 'bg-white'} flex items-center space-x-2 cursor-pointer`}>
            <input type="checkbox" className="w-4 h-4" checked={selectedPart.includes(value)} />
            <label className="text-black font-roboto-slab cursor-pointer">{ value }</label>
        </div>
    )
}

export default InputCheckbox