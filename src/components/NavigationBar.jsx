import { useNavigate } from "react-router-dom";
import "../style_sheets/NavigationBar.css"
import { useDispatch } from "react-redux";
import {category_dropdown,filter_applied} from "../Slice/Slice"

const NavigationBar = ()=>{
    let navigator = useNavigate();
    const dispatch = useDispatch();

    const navigateToProducts = (e)=>{
        const {value} = e.currentTarget.dataset;
        switch(value){
            case "home" : 
                        navigator("/");
                        break;
            case "women":
                        dispatch(category_dropdown("women's clothing"));
                        dispatch(filter_applied("filter_applied"));
                        navigator("/womenSection");
                        break;
            case "men":
                        dispatch(category_dropdown("men's clothing"));
                        dispatch(filter_applied("filter_applied"));
                        navigator("/menSection");
                        break;
            case "all":
                        dispatch(category_dropdown(""));
                        console.log("dispached1")
                        dispatch(filter_applied("filter_not_applied"));
                        console.log("dispached2")
                        navigator("/allSection");
                        break;
        }
        
        
    }
    return(
        <>
            <nav>
            <ul>
                <li data-value={"home"} onClick={navigateToProducts}>
                    <a href="#">Home</a>
                    <br />
                    <div className="underline" />
                </li>
                <li data-value={"women"} onClick={navigateToProducts}>
                    <a href="#">Women</a>
                    <br />
                    <div className="underline" />
                </li>
                <li data-value={"men"} onClick={navigateToProducts}>
                    <a href="#">Men</a>
                    <br />
                    <div className="underline" />
                </li>
                <li data-value={"all"} onClick={navigateToProducts}>
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