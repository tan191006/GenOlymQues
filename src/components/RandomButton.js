import {TbArrowsRandom} from "react-icons/tb";
import {motion} from "framer-motion";

export function RandomButton () {

    return (
        <motion.div
            className={"bg-white flex items-center justify-center py-1 px-2 text-sm mr-2 rounded border-2 border-black cursor-pointer font-roboto-slab"}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            <div className={"mr-1"}>
                <TbArrowsRandom />
            </div>
            RANDOM
        </motion.div>
    )
}