import { useNavigate } from "react-router-dom";
import "../style_sheets/NavigationBar.css"

const NavigationBar = ()=>{
    let navigator = useNavigate();
    
    return(
        <>
            <nav>
            <ul>
                <li onClick={()=>navigator("/")}>
                    <a href="#">Home</a>
                    <br />
                    <div className="underline" />
                </li>
                <li onClick={()=>navigator("womenSection")}>
                    <a href="#">Women</a>
                    <br />
                    <div className="underline" />
                </li>
                <li onClick={()=>navigator("menSection")}>
                    <a href="#">Men</a>
                    <br />
                    <div className="underline" />
                </li>
                <li onClick={()=>navigator("allSection")}>
                    <a href="#">All</a>
                    <br />
                    <div className="underline" />
                </li>
                <li>
                    <a href="#">Brands</a>
                    <br />
                    <div className="underline" />
                </li>
                <li>
                    <a href="#">New</a>
                    <br />
                    <div className="underline" />
                </li>
                <li>
                    <a href="#">Popular</a>
                    <br />
                    <div className="underline" />
                </li>
                <li>
                    <a href="#">Sale</a>
                    <br />
                    <div className="underline" />
                </li>
            </ul>

            <div className="cart_favorites">
                <i className="fa-solid fa-cart-shopping" id="cart" />
                <i className="fa-solid fa-heart" id="favorites" />
            </div>
        </nav>
        <hr/>
    </>
        
    )
}
export default NavigationBar