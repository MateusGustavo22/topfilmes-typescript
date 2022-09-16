import Header from "./components/header/Header"
import Topfilmes from "./components/TopFilmes/Topfilmes"
import "./App.css"

function App() {
  
  return (
    <>
      <Header />
      <h1 className="melhoresFilmes">Melhores filmes</h1>
      <Topfilmes />
    </>
  )
  
}

export default App
