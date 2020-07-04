import React from "react";

function Home() {
  return (
    <>
      <div
        id="carouselHomePageIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="4000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselHomePageIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselHomePageIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={require("./images/Welcome.png")}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={require("./images/Options.png")}
              alt="Second slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselHomePageIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselHomePageIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Home;
