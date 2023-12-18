import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  const finalUrl = `${url}${search}`;

  const getData = async () => {
    setLoading(true);
    const {
      data: { meals },
    } = await axios(finalUrl);

    if (meals) {
      setFoods(meals);
    } else {
      setFoods([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getData();
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [search]);

  return (
    <AppContext.Provider value={{ loading, foods, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
