import { useRef } from "react";
import { UseGlobalContext } from "../hooks/UseGlobalContext";

export const Search = () => {
  const { setSearch } = UseGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputContainer = useRef();

  return (
    <div className="my-3 ">
      <form className="w-50 mx-auto " onSubmit={handleSubmit}>
        <label
          htmlFor=""
          className="form-label text-success fw-bold fs-4 text-center w-100 "
        >
          Search For Your Favorite Meal
        </label>

        <input
          type="text"
          className=" form-control  border-success  border-2  shadow-none bg-success-subtle   text-success fs-5"
          name=""
          id=""
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          ref={inputContainer}
          onChange={() => setSearch(inputContainer.current.value)}
        />
      </form>
    </div>
  );
};
