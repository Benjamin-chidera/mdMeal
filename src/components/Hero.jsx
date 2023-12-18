import React from "react";

export const Hero = () => {
  return (
    <div className="hero-wrapper d-flex px-2  justify-content-center  justify-content-md-start  align-items-center ">
      <div className="text-start">
        <p className="display-5 text-success ">Healthy Foods</p>
        <h1 className="text-dark fw-light text-white ">Explore Different Meals</h1>
        <button className="btn btn-success text-white">
          <a href="#below" className=" text-decoration-none  text-white ">
            See More Below
          </a>
        </button>
      </div>
    </div>
  );
};
