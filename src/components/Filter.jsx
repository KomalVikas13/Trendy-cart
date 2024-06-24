import axios from "axios";
import { useEffect, useState } from "react";

const Filter = ()=>{
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    const filters = async ()=>{
        const response1 = await axios.get(`https://dummyjson.com/products/categories`);
        const response2 = await axios.get(`https://fakestoreapi.com/products/categories`);
        setData1(response1.data);
        console.log(response1.data);
        setData2(response2.data);
        console.log(response2.data);
    } 
    useEffect(()=>{
        filters();
    },[])
    return(
        <>
            <div className="category">
                <h3>Category</h3>
                <select name="categoryDropdown">
                    <option name="select">--Select--</option>
                    {
                        data1.map((element,index)=>{
                            return(
                                <option value={element.slug}>{element.name}</option>
                            )
                        })
                        
                    }
                    {
                        data2.map((element,index)=>{
                            return(
                                <option value={element}>{element}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="customerRatings"></div>
            <div className="prices"></div>
        </>
    )
}
export default Filter;