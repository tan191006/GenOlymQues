import { CiSquareRemove } from "react-icons/ci";
import {
    motion
} from "framer-motion";

export function Tag ({tag, bg, tags, setTags}) {

    const handleClick = (event) => {
        event.stopPropagation();
        setTags([...tags].filter((e) => e !== tag))
    };

    return (

        <motion.div
            className={bg + " pl-3 pr-1 py-1 mr-2 rounded border-2 border-black text-sm cursor-pointer inline-block font-roboto-slab"}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            <div className="flex items-center">
                 {tag}
                 <button onClick={handleClick} className="pl-2 text-xl"><CiSquareRemove /></button>
             </div>
        </motion.div>

    )
}