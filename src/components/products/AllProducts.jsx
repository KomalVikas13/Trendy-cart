import axios from "axios"
import { useEffect, useState } from "react";
import "../../style_sheets/Products.css";

const AllProducts = ()=>{
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    let womenProd = async ()=>{
        let response1 = await axios.get(`https://dummyjson.com/products`); 
        let response2 = await axios.get(`https://fakestoreapi.com/products?_limit=50`);
        console.log(response1.data.products);
        setData1(()=>response1.data.products)
        console.log(response2.data);
        setData2(response2.data);
    }
    useEffect(()=>{
        womenProd();
    },[])
    return(
        <div className="section-width">
        {
            (data1.length != 0 && data2.length != 0) ?
        <>
            
            <h2>All products</h2>
            <div className="container text-center">
            <div className="row justify-content-md-center" style={{gap: "5rem"}}>
            {
                data1.map((element,index)=>{
                        return (
                            <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                                <img src={element.thumbnail} height={300} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" title={element.title}>{element.title}</h5>
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
                })
            }
            </div>
            </div>
            <div className="container text-center">
            <div className="row justify-content-md-center" style={{gap: "5rem"}}>
            {
                data2.map((element,index)=>{
                    return(
                        <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                            <img src={element.image} height={300} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{element.title}</h5>
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
        :(
            <div className="spinner_style">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
            ) 
        }
        </div>
    )
}
export default AllProducts;