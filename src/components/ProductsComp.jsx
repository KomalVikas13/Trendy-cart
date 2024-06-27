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

  let womenProd = async () => {
    let response1 = await axios.get(`https://dummyjson.com/products`);
    let response2 = await axios.get(`https://fakestoreapi.com/products?_limit=50`);
    console.log(response1.data.products);
    setData1(response1.data.products);
    console.log(response2.data);
    setData2(response2.data);
  };

  useEffect(() => {
    womenProd();
  }, []);

  useEffect(() => {
    console.log("state changed..!");
  }, [categoryDropdown, rating, pricesCategoryMaxi, pricesCategoryMini]);

  const filteredData1 = data1.filter((element) => categoryDropdown === element.category);
  const filteredData2 = data2.filter((element) => categoryDropdown === element.category);

  return (
    <div className="section-width">
      {data1.length !== 0 && data2.length !== 0 ? (
        <>
          <h2>{categoryDropdown.charAt(0).toUpperCase() + categoryDropdown.slice(1)}</h2>
          <div className="container text-center">
            <div className="row justify-content-md-center" style={{ gap: "5rem" }}>
              {filteredData1.length > 0 && (
                filteredData1.map((element) => (
                  <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                    <img src={element.thumbnail} height={300} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title ellipsis-single-line" title={element.title}>
                        {element.title}
                      </h5>
                      <p className="card-text">Brand: {element.brand}</p>
                      <p className="card-text">Price: ₹{(element.price * 82).toFixed(2)}</p>
                      <p className="card-text">Rating: {element.rating}</p>
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
            <div className="row justify-content-md-center" style={{ gap: "5rem" }}>
              {filteredData2.length > 0 && (
                filteredData2.map((element) => (
                  <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                    <img src={element.image} height={300} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title ellipsis-single-line">{element.title}</h5>
                      <p className="card-text">Price: ₹{(element.price * 82).toFixed(2)}</p>
                      <p className="card-text">Rating: {element.rating.rate} ({element.rating.count})</p>
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
            (filteredData1.length == 0 && filteredData2.length == 0 && filterApplied === "filter_applied") ?
            (<h1>Currently items in "{categoryDropdown.charAt(0).toUpperCase()+categoryDropdown.slice(1)}" category are not available</h1>)
              :
            (
              <>
              <h2>All Products</h2>
              <div className="container text-center">
                <div className="row justify-content-md-center" style={{ gap: "5rem" }}>
                  {
                    data1.map((element) => (
                      <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                        <img src={element.thumbnail} height={300} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title ellipsis-single-line" title={element.title}>
                            {element.title}
                          </h5>
                          <p className="card-text">Brand: {element.brand}</p>
                          <p className="card-text">Price: ₹{(element.price * 82).toFixed(2)}</p>
                          <p className="card-text">Rating: {element.rating}</p>
                          <a href="#" className="btn btn-primary">
                            View Product
                          </a>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="container text-center">
                <div className="row justify-content-md-center" style={{ gap: "5rem" }}>
                  {
                    data2.map((element) => (
                      <div className="card col-md-auto" style={{ width: "18rem" }} key={element.id}>
                        <img src={element.image} height={300} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title ellipsis-single-line">{element.title}</h5>
                          <p className="card-text">Price: ₹{(element.price * 82).toFixed(2)}</p>
                          <p className="card-text">Rating: {element.rating.rate} ({element.rating.count})</p>
                          <a href="#" className="btn btn-primary">
                            View Product
                          </a>
                        </div>
                      </div>
                    ))
                   }
                </div>
              </div>
              </>
            )
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
