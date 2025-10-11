interface TileProps {
    value?: number
}

export default function Tile(props: TileProps) {
    return <div className="rounded-xl bg-amber-100 shadow-inner aspect-[1/1]">{props.value}</div>
}
