import { useState, useEffect } from "react"
import axios from "axios"
import Filme from "../Filme/Filme"
import "./Topfilmes.css"

function Topfilmes() {
  
  const [movies, setMovies] = useState<string[]>([])
  
  const apiKey = import.meta.env.VITE_API_KEY
  const apiTmdb = import.meta.env.VITE_API
  const moviesSearch = import.meta.env.VITE_SEARCH

  async function getMovies(apiKey, apiTmdb) {
    const bestMovies = `${apiTmdb}top_rated?${apiKey}`
    const moviesData = await axios.get(bestMovies)
    setMovies(moviesData.data.results)
  }
  
  useEffect(() => {
    getMovies(apiKey, apiTmdb)
  },[])
  return (
    <div className="filmes">
      {movies.map((mv) => <Filme dados={mv} />)}
    </div>
  )
}

export default Topfilmes