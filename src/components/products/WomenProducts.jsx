import axios from "axios"
import { useEffect, useState } from "react";

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
                data.map((element,index)=>{
                    if(element.category == "beauty"){
                        return (
                            <div className="card" style={{ width: "18rem" }} key={element.id}>
                                <img src={element.thumbnail} className="card-img-top" alt="..." />
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
            <h2>Recommended products</h2>
            {
                recommended.map((element,index)=>{
                    console.log(element.images[0].url);
                    return(
                        <div className="card" style={{ width: "18rem" }} key={element.id}>
                            <img src={element.images[0].url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                Go somewhere
                                </a>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}
export default WomenProducts;