import "./Header.css"
import { BiSearchAlt2 } from "react-icons/bi"

function Header() {
  return (
    <div className="header">
      <div className="header_area">
        <div className="logo">
          <h1>TSFILMES</h1>
        </div>
        <div className="search">
          <div className="input_area">
            <input type="text" placeholder="Buscar filme" /> 
            <div className="search_icon">
              <BiSearchAlt2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header