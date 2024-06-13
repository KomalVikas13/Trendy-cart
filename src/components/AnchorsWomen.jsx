import { useNavigate } from "react-router-dom";
import "../style_sheets/NavigationAnchors.css"

const AnchorsWomen = ()=>{
    let navigator = useNavigate();
    return(
        <section className="hidden_section_anchors">
            <div className="hidden_lists" id="women">
                <div className="hidden_lists_cross" onClick={()=>navigator("/")}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <p>WOMEN</p>
                <div className="hidden_lists_buttons">
                    <button className="hidden_lists_buttons_each">Handbags</button>
                    <button className="hidden_lists_buttons_each">Lipsticks</button>
                    <button className="hidden_lists_buttons_each">footware</button>
                    <button className="hidden_lists_buttons_each">clothes</button>
                </div>
                </div>
        </section>
    )
}
export default AnchorsWomen;