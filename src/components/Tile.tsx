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
        0: "bg-gradient-to-br from-amber-100 to-amber-200",
        2: "bg-gradient-to-br from-amber-200 to-amber-300",
        4: "bg-gradient-to-br from-amber-300 to-amber-400",
        8: "bg-gradient-to-br from-orange-400 to-orange-500 text-white",
        16: "bg-gradient-to-br from-orange-500 to-orange-600 text-white",
        32: "bg-gradient-to-br from-red-400 to-red-500 text-white",
        64: "bg-gradient-to-br from-red-500 to-red-600 text-white",
        128: "bg-gradient-to-br from-yellow-300 to-yellow-400",
        256: "bg-gradient-to-br from-yellow-400 to-yellow-500",
        512: "bg-gradient-to-br from-yellow-500 to-yellow-600",
        1024: "bg-gradient-to-br from-amber-400 to-amber-500 text-white",
        2048: "bg-gradient-to-br from-green-400 to-green-500 text-white"
    }

    return (
        <motion.div
            layout
            initial={{ scale: cellValue ? 0.7 : 1 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative w-full before:content-[''] before:block before:pt-[100%] rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.2)] ${
                colorMap[cellValue.value] ?? colorMap[0]
            } flex items-center justify-center text-xl font-bold select-none`}
        >
            {cellValue.value ? <span className="absolute text-center drop-shadow-sm">{cellValue.value}</span> : null}
        </motion.div>
    )
}
