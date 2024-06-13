import { useNavigate } from "react-router-dom";
import "../style_sheets/NavigationAnchors.css"

const AnchorsMen = ()=>{
    let navigator = useNavigate();
    return(
        <section className="hidden_section_anchors">
            <div className="hidden_lists" id="men">
                <div className="hidden_lists_cross" onClick={()=>navigator("/")}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <p>MEN</p>
                <div className="hidden_lists_buttons">
                    <button className="hidden_lists_buttons_each">Shoes</button>
                    <button className="hidden_lists_buttons_each">Shirts</button>
                    <button className="hidden_lists_buttons_each">Shoes</button>
                    <button className="hidden_lists_buttons_each">T-Shirts</button>
                </div>
            </div>
        </section>

    )
}
export default AnchorsMen;