import { motion } from "framer-motion"
import type { CellValue } from "../utils/board"

interface TileProps {
    cellValue?: CellValue
}

export default function Tile({ cellValue }: TileProps) {
    if (!cellValue) {
        return (
            <div className="relative w-full before:content-[''] before:block before:pt-[100%] rounded-xl bg-amber-100" />
        )
    }

    const variants = {
        initial: { scale: cellValue.isNew ? 0 : 1 },
        animate: {
            scale: cellValue.isMerged ? [1, 1.2, 1] : 1,
            transition: { duration: cellValue.isMerged ? 0.2 : 0.15 }
        }
    }

    const colorMap: Record<number, string> = {
        2: "bg-amber-100 text-gray-800",
        4: "bg-amber-200 text-gray-800",
        8: "bg-orange-300 text-white",
        16: "bg-orange-400 text-white",
        32: "bg-orange-500 text-white",
        64: "bg-orange-600 text-white",
        128: "bg-yellow-400 text-white",
        256: "bg-yellow-500 text-white",
        512: "bg-yellow-600 text-white",
        1024: "bg-yellow-700 text-white",
        2048: "bg-yellow-800 text-white"
    }

    return (
        <motion.div
            className={`relative w-full before:content-[''] before:block before:pt-[100%] rounded-xl shadow-inner flex items-center justify-center text-xl font-bold ${
                cellValue.value ? colorMap[cellValue.value] : "bg-amber-50"
            }`}
            initial="initial"
            animate="animate"
            variants={variants}
        >
            <span className="absolute">{cellValue.value || ""}</span>
        </motion.div>
    )
}
