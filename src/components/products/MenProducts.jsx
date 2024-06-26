import axios from "axios";
import { useEffect, useState } from "react";
import "../../style_sheets/Products.css";

const MenProducts = ()=>{
    const [data, setData] = useState([]);
    const [recommended, setRecommded] = useState([]);
    let menProd = async ()=>{
        let response1 = await axios.get(`https://dummyjson.com/products`); 
        let response2 = await axios.get(`https://fakestoreapi.com/products?_limit=50`);
        console.log(response1.data.products);
        setRecommded(()=>response1.data.products);
        console.log(response2.data);
        setData(response2.data);
    }
    useEffect(()=>{
        menProd();
    },[])
    return(
        <div className="section-width">
            
            {
                (data.length != 0 && recommended.length != 0) ?
                <>
                <h1>Men Products</h1> 
            <div className="container text-center">
            <div className="row justify-content-md-center" style={{gap: "5rem"}}>
            {
                data.map((element,index)=>{
                    if(element.category == "men's clothing"){
                        return(
                            <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                                <img src={element.image} height={300} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title ellipsis-single-line" title={element.title}>{element.title}</h5>
                                    <p className="card-text">Price : ₹{(element.price*82).toFixed(2)}</p>
                                    <p className="card-text">Rating : {element.rating.rate} ({element.rating.count})</p>
                                    <a href="#" className="btn btn-primary">
                                    Go somewhere
                                    </a>
                                </div>
                            </div>
    
                        )
                    }
                    
                })
            }
            </div>
            </div>
            <h2>Recommended products</h2>
            <div className="container text-center">
            <div className="row justify-content-md-center" style={{gap: "5rem"}}>
            {
                recommended.map((element,index)=>{
                    if(element.category == "fragrances"){
                        return (
                            <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                                <img src={element.thumbnail} height={300} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title ellipsis-single-line">{element.title}</h5>
                                    <p className="card-text">
                                    Brand : {element.brand}
                                    </p>
                                    <p className="card-text">
                                    Price : ₹{(element.price*82).toFixed(2)}
                                    </p>
                                    <p className="card-text">
                                    Rating : {element.rating}
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                    Go somewhere
                                    </a>
                                </div>
                            </div>
                            )
                    }
                })
            }
            </div>
            </div> 
            </>
            : 
            <div className="spinner_style">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
        }           
        </div>
    )
}
export default MenProducts;