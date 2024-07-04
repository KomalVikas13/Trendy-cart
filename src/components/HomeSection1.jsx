import "../style_sheets/HomeSection1.css";
import poster1 from "../assets/posters/poster1.jpg";
import poster2 from "../assets/posters/poster2.jpg";
import poster3 from "../assets/posters/poster3.jpg";

const HomeSection1 = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        >
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={poster2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={poster1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={poster3} className="d-block w-100" alt="..." />
            </div>
        </div>
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
        </div>

    </>
  );
};

export default HomeSection1;
