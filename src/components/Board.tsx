import { type Board } from "../utils/board"
import Tile from "./Tile"

interface BoardProps {
    board: Board
    score: number
    bestScore: number
}

export default function Board(props: BoardProps) {
    return (
        <div className="w-[90vw] max-w-[360px] mx-auto bg-amber-200 p-3 rounded-2xl shadow-inner">
            <p className="text-center mb-2 font-semibold">Score: {props.score}</p>
            <div className="text-md text-gray-600">Best: {props.bestScore}</div>
            <div className="grid grid-cols-4 gap-3" style={{ gridAutoRows: "1fr" }}>
                {props.board.flat().map((cell, i) => (
                    <Tile key={i} value={cell} />
                ))}
            </div>
        </div>
    )
}
