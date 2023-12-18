import React from "react";
import { UseGlobalContext } from "../hooks/UseGlobalContext";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export const MealList = () => {
  const { foods, loading } = UseGlobalContext();

  console.log(foods);

  if (loading) {
    return <Loading />;
  }
  if (foods.length < 1) {
    return (
      <h1 className=" text-success  text-center my-5">CHAI NO FOOD FOUND</h1>
    );
  }

  return (
    <div
      id="below"
      className=" container  d-flex flex-wrap justify-content-between  align-items-center "
    >
      {foods.map((food) => {
        const { idMeal, strMealThumb, strCategory, strMeal } = food;

        return (
          <Link to={`/meal/${idMeal}`} className=" text-decoration-none  my-3  mx-auto " key={idMeal}>
            <div
              className="shadow-lg card rounded-2 "
              style={{ width: "280px" }}
            >
              <img
                src={strMealThumb}
                alt={strMeal}
                className=" rounded-top-2  w-100 "
              />

              <h4 className="text-success text-center fw-bold mt-3 ">
                {strMeal}
              </h4>
              <h5 className=" text-secondary  text-center  fw-light ">
                {strCategory}
              </h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
