import { CiSquareRemove } from 'react-icons/ci';
import { motion } from 'framer-motion';

export function Tag({ tag, bg, tags, setTags, input, setIsInput }) {
    const handleClick = (event) => {
        event.stopPropagation();
        setTags(() => {
            // set IsInput false to rerender TopicChoseForPart2
            if (input) {
                setIsInput(false);
            }
            return tags.filter((e) => e !== tag);
        });
    };

    return (
        <motion.div
            className={
                bg +
                ' mr-2 inline-block cursor-pointer rounded border-2 border-black py-1 pl-3 pr-1 font-roboto-slab text-lg'
            }
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
        >
            <div className="flex items-center">
                {tag}
                <button onClick={handleClick} className="pl-2 text-xl">
                    <CiSquareRemove />
                </button>
            </div>
        </motion.div>
    );
}
