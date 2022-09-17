import "./Header.css"
import { BiSearchAlt2 } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {
  
  const [query, setQuery] = useState("")
  
  return (
    <div className="header">
      <div className="header_area">
        <div className="logo">
          <h1>TSFILMES</h1>
        </div>
        <div className="search">
          <div className="input_area">
            <input type="text" placeholder="Buscar filme" value={query} onChange={(e) => setQuery(e.target.value)} /> 
            <Link to={`/search?q=${query}`}>
              <div className="search_icon">
                <BiSearchAlt2 />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header