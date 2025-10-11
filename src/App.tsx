import "./App.css"
import Header from "./components/Header"
import Board from "./components/Board"

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
            <Header />
            <Board />
        </div>
    )
}

export default App
