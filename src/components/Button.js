import {motion} from "framer-motion";

export function Button ({href, onClick, className, value, children}) {

    let Component = 'button'

    const props = {}

    if(href) {
        Component = 'a'
        props.href = href
    }

    if (onClick) {
        props.onClick = onClick
    }

    return (
        <motion.div
            className={"py-1"}
            whileHover={{ scale: 1.1 }}
        >
            <Component {...props} className={className + " px-5 py-2 rounded border-2 border-black bg-yellow-400 font-bold font-roboto-slab"}>{value || children}</Component>
        </motion.div>
    )
}