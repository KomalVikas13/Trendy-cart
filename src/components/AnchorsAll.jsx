import { useNavigate } from "react-router-dom";
import "../style_sheets/NavigationAnchors.css"

const AnchorsAll = ()=>{
    let navigator = useNavigate();
    return(
        <section className="hidden_section_anchors">
            <div className="hidden_lists" id="kids">
                <div className="hidden_lists_cross" onClick={()=>navigator("/")}>
                <i className="fa-solid fa-xmark" />
                </div>
                <p>KIDS</p>
                <div className="hidden_lists_buttons">
                <button className="hidden_lists_buttons_each">Kids shirts</button>
                <button className="hidden_lists_buttons_each">Kids pants</button>
                <button className="hidden_lists_buttons_each">Kids shoes</button>
                </div>
            </div>
        </section>
    )
}
export default AnchorsAll;