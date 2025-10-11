import { useGameLogic } from "../hooks/useGameLogic"
import Tile from "./Tile"

export default function Board() {
    const { board, score } = useGameLogic()

    return (
        <div className="w-[90vw] max-w-[360px] mx-auto bg-amber-200 p-3 rounded-2xl shadow-inner">
            <p className="text-center mb-2 font-semibold">Score: {score}</p>
            <div className="grid grid-cols-4 gap-3" style={{ gridAutoRows: "1fr" }}>
                {board.flat().map((cell, i) => (
                    <Tile key={i} value={cell} />
                ))}
            </div>
        </div>
    )
}
