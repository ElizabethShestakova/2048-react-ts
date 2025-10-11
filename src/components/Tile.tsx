import type { CellValue } from "../utils/board"

interface TileProps {
    value?: CellValue
}

export default function Tile(props: TileProps) {
    return (
        <div
            className={`relative w-full before:content-[''] before:block before:pt-[100%] rounded-xl shadow-inner flex items-center justify-center text-xl font-bold ${
                props.value ? "bg-amber-400" : "bg-amber-100"
            }`}
        >
            <span className="absolute">{props.value ?? ""}</span>
        </div>
    )
}
