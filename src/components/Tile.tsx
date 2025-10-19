import { motion } from "framer-motion"
import type { CellValue } from "../utils/board"

interface TileProps {
    cellValue?: CellValue
}

export default function Tile({ cellValue }: TileProps) {
    if (!cellValue) {
        return (
            <div
                className="relative w-full before:content-[''] before:block before:pt-[100%] rounded-xl 
                bg-gradient-to-br from-amber-100 to-amber-200 
                dark:from-stone-600 dark:to-stone-700
                shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-3px_6px_rgba(0,0,0,0.3)]"
            />
        )
    }

    const colorMap: Record<number, string> = {
        0: "from-amber-100 to-amber-200 dark:from-stone-600 dark:to-stone-700",
        2: "from-amber-200 to-amber-300 dark:from-stone-500 dark:to-stone-600",
        4: "from-amber-300 to-amber-400 dark:from-stone-400 dark:to-stone-500",
        8: "from-orange-400 to-orange-500 dark:from-orange-600 dark:to-orange-700 text-white",
        16: "from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-800 text-white",
        32: "from-red-400 to-red-500 dark:from-red-600 dark:to-red-700 text-white",
        64: "from-red-500 to-red-600 dark:from-red-700 dark:to-red-800 text-white",
        128: "from-yellow-300 to-yellow-400 dark:from-yellow-500 dark:to-yellow-600",
        256: "from-yellow-400 to-yellow-500 dark:from-yellow-600 dark:to-yellow-700",
        512: "from-yellow-500 to-yellow-600 dark:from-yellow-700 dark:to-yellow-800",
        1024: "from-amber-400 to-amber-500 dark:from-amber-600 dark:to-amber-700 text-white",
        2048: "from-green-400 to-green-500 dark:from-green-600 dark:to-green-700 text-white"
    }

    return (
        <motion.div
            layout
            initial={{ scale: cellValue ? 0.7 : 1 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative w-full before:content-[''] before:block before:pt-[100%] rounded-xl 
                shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.2)] 
                bg-gradient-to-br ${colorMap[cellValue.value] ?? colorMap[0]} 
                flex items-center justify-center text-xl font-bold select-none`}
        >
            {cellValue.value ? <span className="absolute text-center drop-shadow-sm">{cellValue.value}</span> : null}
        </motion.div>
    )
}
