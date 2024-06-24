import axios from "axios";
import { useEffect, useState } from "react";
import "../style_sheets/Filter.css"

const Filter = ()=>{
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    const pricesList = [100,200,300,400,500,600,700,800,900,1000];

    const filters = async ()=>{
        const response1 = await axios.get(`https://dummyjson.com/products/category-list`);
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
        <div className="filter">
            <div className="category">
                <h3>Category</h3>
                <select name="categoryDropdown">
                    <option name="select">--Select--</option>
                    {
                        data1.map((element,index)=>{
                            return(
                                <option value={element} key={index}>{element}</option>
                            )
                        })
                        
                    }
                    {
                        data2.map((element,index)=>{
                            return(
                                <option value={element} key={index+data1.length}>{element}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="customerRatings">
                <h3>Customer Ratings</h3>
                <div className="ratingElements">
                    <input type="radio" value={"1"} name="rating"/><span>less than 1</span>
                </div>
                <div className="ratingElements">
                    <input type="radio" value={"2"} name="rating"/><span>between 1 and 2</span>
                </div>
                <div className="ratingElements">
                    <input type="radio" value={"3"} name="rating"/><span>between 2 and 3</span> 
                </div>
                <div className="ratingElements">
                    <input type="radio" value={"4"} name="rating"/><span>between 3 and 4</span> 
                </div>
                <div className="ratingElements">
                    <input type="radio" value={"5"} name="rating"/><span>between 4 and 5</span> 
                </div>
                <div className="ratingElements">
                    <input type="radio" value={"all"} name="rating"/><span>All</span>
                </div>
            </div>
            <div className="prices">
                <h3>Prices</h3>
                <p>Select range</p>
                <select>
                <option value={"lowest"}>--minimum--</option>
                    {
                        pricesList.map((element,index)=>{
                            return(
                                <option value={"100"} key={index}>{element}</option>
                            )
                        })
                    }
                </select>
                <select>
                <option value={"highest"}>--maximum--</option>
                    {
                        pricesList.map((element,index)=>{
                            return(
                                <option value={"100"} key={index}>{element}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}
export default Filter;