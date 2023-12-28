import {motion} from "framer-motion";

export function Button ({className, value}) {

    return (
        <motion.div
            className={"py-1"}
            whileHover={{ scale: 1.1 }}
        >
            <button className={className + " mt-3 px-5 py-2 rounded border-2 border-black bg-yellow-400 font-bold font-roboto-slab"}>{value}</button>
        </motion.div>
    )
}