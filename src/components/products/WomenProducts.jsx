import axios from "axios"
import { useEffect, useState } from "react";
import "../../style_sheets/Products.css";

const WomenProducts = ()=>{
    const [data, setData] = useState([]);
    const [recommended, setRecommded] = useState([]);
    let womenProd = async ()=>{
        let response1 = await axios.get(`https://dummyjson.com/products`); 
        // let response2 = await axios.get(`https://fakerapi.it/api/v1/products?_quantity=50&_locale=en_US`);
        let response3 = await axios.get(`https://fakestoreapi.com/products?_limit=50`);
        console.log(response1.data.products);
        setData(()=>response1.data.products)
        console.log(response3.data);
        setRecommded(response3.data);
        // setRecommded(()=>response3.data.data);
        // console.log(response3.data.data);
        // setData(response.data.products);
        // console.log(data[0]);
    }
    useEffect(()=>{
        womenProd();
    },[])
    return(
        <>
        
            {
                (data.length != 0 && recommended.length != 0 )?  
            <>
            <h1>Women products</h1>
            <div className="container text-center">
            <div className="row justify-content-md-center" style={{gap: "5rem"}}>
            {
                data.map((element,index)=>{
                    if(element.category == "beauty"){
                        return (
                            <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                                {/* <div style={{width:"100%", height:"250px"}}> */}
                                <img src={element.thumbnail} height={300} className="card-img-top" alt="..." />
                                {/* </div> */}
                                
                                <div className="card-body">
                                    <h5 className="card-title ellipsis-single-line" title={element.title}>{element.title}</h5>
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
            <h2>Recommended products</h2>
            <div className="container text-center">
            <div className="row justify-content-md-center" style={{gap: "5rem"}}>
            {
                recommended.map((element,index)=>{
                    if(element.category == "women's clothing" || element.category == "jewelery")
                    return(
                        <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                            <img src={element.image} height={300} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ellipsis-single-line">{element.title}</h5>
                                <p className="card-text">Price : ₹{(element.price*82).toFixed(2)}</p>
                                <p className="card-text">Price : ₹{element.rating.rate} ({element.rating.count})</p>
                                <a href="#" className="btn btn-primary">
                                Go somewhere
                                </a>
                            </div>
                        </div>

                    )
                })
            }
            </div>
            </div>
            </>
            :
            
                <div className="spinner_style">
                    <i class="fa fa-spinner fa-spin "></i>
                </div>
            }
        </>
    )
}
export default WomenProducts;