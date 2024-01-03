export function TagsInput({ tags, setTags, setIsInput }) {
    function handleKeyDown(e) {
        // If user did not press enter key, return
        if (e.key !== 'Enter') return;
        // Get the value of the input
        const value = e.target.value;
        // If the value is empty, return
        if (!value.trim()) return;
        // Add the value to the tags array
        if (tags.includes(value)) {
            alert('This tag was exist!');
        } else {
            setTags(() => {
                console.log("reset")
                setIsInput(false)
                return [...tags, value]
            });
        }
        // Clear the input
        e.target.value = '';
    }

    return (
        <>
            <input
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Nhập chủ đề ở đây..."
                className="mt-2 inline-block bg-transparent px-3 font-roboto-slab text-xl text-primary placeholder-gray-600 outline-none placeholder:font-bold placeholder:text-white"
            />
        </>
    );
}
