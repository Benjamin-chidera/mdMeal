import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="text-center my-5 my-md-1 ">
      <img
        src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg?size=626&ext=jpg&ga=GA1.2.2085038139.16733444"
        alt="error-img"
        className="ing-fluid d-block mx-auto"
      />

      <Link to={"/"} className=" text-decoration-none ">
        <button className=" btn btn-success d-block  my-3 mx-auto ">
          Go Bck to HomePage
        </button>
      </Link>
    </div>
  );
};
