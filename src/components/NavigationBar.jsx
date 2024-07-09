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
                        navigator("/products");
                        break;
            case "men":
                        dispatch(category_dropdown("men's clothing"));
                        dispatch(filter_applied("filter_applied"));
                        navigator("/products");
                        break;
            case "grocery" :
                        dispatch(category_dropdown("groceries"));
                        dispatch(filter_applied("filter_applied"));
                        navigator("/products");
                        break;
            case "furniture" :
                        dispatch(category_dropdown("furniture"));
                        dispatch(filter_applied("filter_applied"));
                        navigator("/products");
                        break;
            case "jewelery" :
                        dispatch(category_dropdown("jewelery"));
                        dispatch(filter_applied("filter_applied"));
                        navigator("/products");
                        break;
            case "electronics" :
                        dispatch(category_dropdown("electronics"));
                        dispatch(filter_applied("filter_applied"));
                        navigator("/products");
                        break;
            case "all":
                        dispatch(category_dropdown("all products"));
                        dispatch(filter_applied("filter_not_applied"));
                        navigator("/products");
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
                <li data-value={"grocery"} onClick={navigateToProducts}>
                    <a href="#">Groceries</a>
                    <br />
                    <div className="underline" />
                </li>
                <li data-value={"furniture"} onClick={navigateToProducts}>
                    <a href="#">Furniture</a>
                    <br />
                    <div className="underline" />
                </li>
                <li data-value={"jewelery"} onClick={navigateToProducts}>
                    <a href="#">Jewelery</a>
                    <br />
                    <div className="underline" />
                </li>
                <li data-value={"electronics"} onClick={navigateToProducts}>
                    <a href="#">Electronics</a>
                    <br />
                    <div className="underline" />
                </li>
                <li data-value={"all"} onClick={navigateToProducts}>
                    <a href="#">All</a>
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