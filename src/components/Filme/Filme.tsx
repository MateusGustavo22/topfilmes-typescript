import "./Filme.css"
import { AiFillStar } from "react-icons/ai"

function Filme(props) {
  
  const poster = "https://image.tmdb.org/t/p/w500/"
  
  return (
    <div className="filme">
      <div className="filme_banner">
        <img src={`${poster}${props.dados.poster_path}`} alt="banner do filme" />
      </div>
      <div className="filme_desc">
        <h2>{props.dados.original_title}</h2>
        <div className="nota">
        {console.log(props.dados)}
          <div className="nota_icon">
            <AiFillStar />
          </div>
          <span>{props.dados.vote_average}</span>
        </div>
      </div>
    </div>
  )
}

export default Filme