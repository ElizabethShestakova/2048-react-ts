interface HeaderProps {
    resetGameFunction: () => void
}

export default function Header(props: HeaderProps) {
    return (
        <>
            <h1 className="text-4xl font-bold mb-6 text-amber-700 dark:text-amber-300">2048</h1>
            <div>
                <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    onClick={props.resetGameFunction}
                >
                    New Game
                </button>
                <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    Dark theme
                </button>
            </div>
        </>
    )
}
