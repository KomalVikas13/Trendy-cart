import axios from "axios"
import { useEffect, useState } from "react";

const MenProducts = ()=>{
    const [data, setData] = useState([]);
    const [recommended, setRecommded] = useState([]);
    let menProd = async ()=>{
        let response1 = await axios.get(`https://dummyjson.com/products`); 
        let response2 = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        let response3 = await axios.get(`https://fakestoreapi.com/products?_limit=50`);
        console.log(response1.data.products);
        setData(()=>response1.data.products);
        console.log(response2.data);
        console.log(response3.data);
        setRecommded(response3.data);
        // setRecommded(()=>response3.data.data);
        // console.log(response3.data.data);
        // setData(response.data.products);
        // console.log(data[0]);
    }
    useEffect(()=>{
        menProd();
    },[])
    return(
        <>
            <div className="container text-center">
            <div className="row justify-content-md-center" style={{gap: "5rem"}}>
            {
                recommended.map((element,index)=>{
                    if(element.category == "men's clothing"){
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
                    }
                    
                })
            }
            </div>
            </div>
            <h2>Recommended products</h2>
            <div className="container text-center">
            <div className="row justify-content-md-center" style={{gap: "5rem"}}>
            {
                data.map((element,index)=>{
                    if(element.category == "fragrances"){
                        return (
                            <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                                <img src={element.thumbnail} height={300} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.title}</h5>
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
    )
}
export default MenProducts;