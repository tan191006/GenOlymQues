
export function TagsInput ({tags, setTags}) {

    function handleKeyDown(e){
        // If user did not press enter key, return
        if(e.key !== 'Enter') return
        // Get the value of the input
        const value = e.target.value
        // If the value is empty, return
        if(!value.trim()) return
        // Add the value to the tags array
        if(tags.includes(value)) {
            alert("This tag was exist!")
        }
        else {
            setTags([...tags, value])
        }
        // Clear the input
        e.target.value = ''
    }

    return (
        <>
            <input 
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Nhập chủ đề ở đây..."
                className="inline-block text-xl bg-transparent placeholder:text-white text-primary px-3 mt-2 outline-none placeholder-gray-600 placeholder:font-bold font-roboto-slab"
            />
        </>
    )
}