import Tile from "./Tile"

export default function Board() {
    return (
        <div className="w-[90vw] max-w-[360px] mx-auto bg-amber-200 p-3 rounded-2xl shadow-inner">
            <div className="grid grid-cols-4 gap-3" style={{ gridAutoRows: "1fr" }}>
                {Array.from({ length: 16 }).map((_, i) => (
                    <Tile key={i} />
                ))}
            </div>
        </div>
    )
}
