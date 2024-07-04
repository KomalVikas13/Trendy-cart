import axios from "axios";
import { useEffect, useState } from "react";
import "../style_sheets/Products.css";
import { useSelector } from "react-redux";
import { selectCategoryDropdown, selectRating, selectPricesCategoryMini, selectPricesCategoryMaxi, selectFilterApplied } from "../Slice/Slice";

const ProductsComp = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const categoryDropdown = useSelector(selectCategoryDropdown);
  const rating = useSelector(selectRating);
  const pricesCategoryMini = useSelector(selectPricesCategoryMini);
  const pricesCategoryMaxi = useSelector(selectPricesCategoryMaxi);
  const filterApplied = useSelector(selectFilterApplied);

  let products = async () => {
    try{
      let response1 = await axios.get(`https://dummyjson.com/products`);
      let response2 = await axios.get(`https://fakestoreapi.com/products?_limit=50`);
      console.log(response1.data.products);
      setData1(response1.data.products);
      console.log(response2.data);
      setData2(response2.data);
    }catch(error){
      document.write(error);
    }
    
  };

  useEffect(() => {
    products();
  }, []);

  useEffect(() => {
    console.log("state changed..!");
    console.log(categoryDropdown);
    console.log(categoryDropdown, rating, pricesCategoryMini, pricesCategoryMaxi);
  }, [categoryDropdown, rating, pricesCategoryMini, pricesCategoryMaxi]);

  const filteredData1 = data1.filter((element) => (categoryDropdown === "all products" || categoryDropdown === element.category) && 
                                                  (rating == 6 || 
                                                    (rating > element.rating && rating-1 < element.rating) ) &&
                                                  pricesCategoryMini <= (element.price * 82) && 
                                                  pricesCategoryMaxi >= (element.price * 82));
  const filteredData2 = data2.filter((element) => (categoryDropdown === "all products" || categoryDropdown === element.category) &&
                                                  (rating == 6 ||
                                                     (rating > element.rating.rate && rating-1 < element.rating.rate) ) &&
                                                  pricesCategoryMini <= (element.price * 82) && 
                                                  pricesCategoryMaxi >= (element.price * 82));
                              
  const getRating = (rating)=>{
      if(rating > 4){
        return "rating-high";
      }
      else if(rating > 3){
        return "rating-medium";
      }
      else{
        return "rating-low";
      }
  }

  return (
    <div className="products_section">
      {data1.length !== 0 && data2.length !== 0 ? (
        <>
          <p className="products_title">{categoryDropdown.charAt(0).toUpperCase() + categoryDropdown.slice(1)}</p>
          <div className="container text-center">
            <div className="row justify-content-md-center gap-5">
              {(filteredData1.length > 0) && (
                filteredData1.map((element) => (
                  <div className="card col-md-3 products_boxes bg-white" key={element.id}>
                    <img src={element.thumbnail} height={200} width={200} style={{margin:"auto",marginTop:"10px"}} alt={element.title} />
                    <div className="card-body">
                      <h5 className="card-title ellipsis-single-line" title={element.title}>
                        {element.title}
                      </h5>
                      {/* <p className="card-text">Brand: {element.brand}</p> */}
                      <p className="card-text">Price: ₹{(element.price * 82).toFixed(2)}</p>
                      <p className={`card-text`} >Rating: <i className={`fa-solid fa-star ${getRating(element.rating)}`}></i> <span className={`${getRating(element.rating)}`}>{element.rating}</span> </p>
                      <a href="#" className="btn btn-primary">
                        View Product
                      </a>
                    </div>
                  </div>
                ))
              ) 
              }
            </div>
          </div>
          <div className="container text-center">
            <div className="row justify-content-md-center gap-5">
              {filteredData2.length > 0 && (
                filteredData2.map((element) => (
                  <div className="card col-md-3 products_boxes border" style={{ marginTop: "20px" }} key={element.id}>
                    <img src={element.image} height={200} width={200} style={{margin:"auto",marginTop:"10px"}} alt={element.title} />
                    <div className="card-body">
                      <h5 className="card-title ellipsis-single-line">{element.title}</h5>
                      <p className="card-text">Price: ₹{(element.price * 82).toFixed(2)}</p>
                      <p className="card-text">Rating: <i className={`fa-solid fa-star ${getRating(element.rating.rate)}`}></i> <span className={`${getRating(element.rating.rate)}`}>{element.rating.rate}</span> ({element.rating.count})</p>
                      <a href="#" className="btn btn-primary">
                        View Product
                      </a>
                    </div>
                  </div>
                ))
              ) }
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          {
            (filteredData1.length == 0 && filteredData2.length == 0 && filterApplied === "filter_applied") &&
            (<h1>Currently items in "{categoryDropdown.charAt(0).toUpperCase()+categoryDropdown.slice(1)}" category you have selected are not available</h1>)
          }
          {
            (filteredData1.length == 0 && filteredData2.length == 0 && filterApplied !== "filter_applied") &&
            (<h1>Please select a category to display products</h1>) 
          }
        </>
      ) : (
        <div className="spinner_style">
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      )}
    </div>
  );
};

export default ProductsComp;
