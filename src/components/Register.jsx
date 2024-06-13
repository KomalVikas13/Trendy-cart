import "../style_sheets/LoginRegister.css"
import google from "../assets/logos/icons8-google.svg"
import yahoo from "../assets/logos/icons8-yahoo.svg"
import { useNavigate } from "react-router-dom"

const Register = ()=>{
    let navigator = useNavigate();
    return(
        <section class="hidden_section_login_register">
            <div class="hidden_section_register">
                <div class="hidden_section_login_register_cross" onClick={()=>navigator("/")}>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <h2>Register</h2>   
                <div class="hidden_section_login_inputs">
                    <input type="text" placeholder="Enter your name"/>
                    <input type="email" placeholder="Enter your email"/>
                    <input type="password" placeholder="Create password"/>
                    <input type="password" placeholder="Confirm password"/>
                </div>
                <button class="hidden_section_login_button">Register</button>
                <div class="hidden_section_login_options">
                    <div class="hidden_section_login_options_styling"><img src={google} height="25px"/><button>SignUp with Google</button></div>
                    <div class="hidden_section_login_options_styling"><img src={yahoo} height="25px"/><button>SignUp with Yahoo</button></div>
                </div>
            </div>
        </section>
    )
}
export default Register;