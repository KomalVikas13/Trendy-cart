import { useNavigate } from "react-router-dom";
import "../style_sheets/Header.css"

const Header = ()=>{
    let navigator = useNavigate();
    return(
        <header>
            <div className="title">
                <h1>Trendy Cart</h1>
            </div>
            <div className="search">
                <i className="fa-solid fa-magnifying-glass" />
                <input type="text" placeholder="search" id="search_bar" />
            </div>
            <div className="login_register">
                <div>
                <button className="login_register_buttons" onClick={()=>navigator("login")}>Login</button>
                </div>
                <div>
                <button className="login_register_buttons" onClick={()=>navigator("register")}>SignUp</button>
                </div>
                <div className="profile">
                    <i className="fa-solid fa-user" />
                </div>
            </div>
        </header>
    )
}
export default Header;