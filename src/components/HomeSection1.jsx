import "../style_sheets/HomeSection1.css"
import poster1 from "../assets/posters/poster1.jpg"
import poster2 from "../assets/posters/poster2.jpg"
import poster3 from "../assets/posters/poster3.jpg"
import poster4 from "../assets/posters/poster4.jpg"

const HomeSection1 = ()=>{
    return(
        <section className="offers">
            <img src={poster1} alt="poster1" className="offer_posters" />
            <img src={poster2} alt="poster2" className="offer_posters" />
            <img src={poster3} alt="poster3" className="offer_posters" />
            <img src={poster4} alt="poster4" className="offer_posters" />
        </section>
    )
}

export default HomeSection1;