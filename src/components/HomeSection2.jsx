import "../style_sheets/HomeSection2.css"

import adidas from "../assets/logos/Adidas-Logo.wine.svg"
import calvin from "../assets//logos/calvin-klein-logo.png"
import chanel from "../assets/logos/Chanel-Logo.wine.svg"
import gucci from "../assets/logos/Gucci-Logo.wine.svg"
import llbean from "../assets/logos/l-l-bean-logo-svg-vector.svg"
import vans from "../assets/logos/vans-3-logo.png"

const HomeSection2 = ()=>{
    return(
        <section className="popularBrands">
            <div className="heading">
                <h2>Popular Brands</h2>
            </div>
            <div className="brand_Images_Div">
                <img src={adidas} className="brand_Images" />
                <img src={calvin} className="brand_Images" />
                <img src={chanel} className="brand_Images" />
                <img src={gucci} className="brand_Images" />
                <img src={llbean} className="brand_Images" />
                <img src={vans} className="brand_Images" />
            </div>
        </section>
    )
}

export default HomeSection2;