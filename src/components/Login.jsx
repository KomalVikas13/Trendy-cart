import "../style_sheets/LoginRegister.css"
import google from "../assets/logos/icons8-google.svg"
import yahoo from "../assets/logos/icons8-yahoo.svg"
import { useNavigate } from "react-router-dom"

const Login = ()=>{
    let navigator = useNavigate();
    return(
        <section class="hidden_section_login_register">
            <div class="hidden_section_login">
                <div class="hidden_section_login_register_cross" onClick={()=>navigator("/")}>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <h2>Login</h2>
                <div class="hidden_section_login_inputs">
                    <input type="text" placeholder="Enter Username"/>
                    <input type="password" placeholder="Enter Password"/>
                </div>
                <button class="hidden_section_login_button">Login</button>
                <div class="hidden_section_login_options">
                    <div class="hidden_section_login_options_styling"><img src={google} height="25px"/><button>Login with Google</button></div>
                    <div class="hidden_section_login_options_styling"><img src={yahoo} height="25px"/><button>Login with Yahoo</button></div>
                </div>
            </div>
        </section>
    )
}
export default Login;