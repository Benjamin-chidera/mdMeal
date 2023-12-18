import React from "react";

export const Footer = () => {
  return (
    <div className=" bg-success-subtle  text-success  text-center  py-3 ">
      <h3 className=" fw-light ">
        &copy; {new Date().getFullYear()} All Rights reserves
      </h3>
      <h4 className="mt-1 fw-bold ">🥔 The meal Place</h4>
    </div>
  );
};
