import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export const SingleMeal = () => {
  const { mealId } = useParams();
  const [loading, setLoading] = useState(true);
  const [food, setFood] = useState(null);
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

  const finalUrl = url + mealId;
  const getMeal = async () => {
    setLoading(true);
    const {
      data: { meals },
    } = await axios(finalUrl);

    if (meals) {
      setFood(meals[0]);
    } else {
      setFood(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    getMeal();
  }, [mealId]);

  if (loading) {
    return <Loading />;
  }

  if (!food) {
    return (
      <h2 className="text-success my-5 text-center ">NO MEAL TO DISPLAY</h2>
    );
  }

  console.log(food);

  return (
    <div className="container mt-2 ">
      <div>
        <img
          src={food.strMealThumb}
          alt={food.strMeal}
          className="w-100 object-fit-cover "
          style={{ height: "400px" }}
        />
      </div>
      <div className="my-3">
        <p>
          <span className=" bg-success  text-white  p-2  me-2  rounded-2 ">
            Name:
          </span>
          {food.strMeal}
        </p>
        <p>
          <span className=" bg-success  text-white  p-2  me-2  rounded-2 ">
            Category:
          </span>
          {food.strCategory}
        </p>
        <p>
          <span className=" bg-success  text-white  p-2  me-2  rounded-2 ">
            Tags:
          </span>
          {food.strTags}
        </p>
        <p>
          <span className=" bg-success  text-white  p-2  me-2  rounded-2 ">
            Area:
          </span>
          {food.strArea}
        </p>
        <p className=" lh-lg ">
          <span className=" bg-success  text-white  p-2  me-2  rounded-2 ">
            Instructions:
          </span>
          {food.strInstructions}
        </p>
        <p className=" lh-lg">
          <span className=" bg-success  text-white  p-2  me-2  rounded-2 ">
            Video Instructions:
          </span>

          <ReactPlayer url={food.strYoutube} width={"100%"} height={"450px"} />
        </p>
      </div>
    </div>
  );
};
