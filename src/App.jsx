import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { SingleMeal } from "./pages/SingleMeal";
import { Error } from "./pages/Error";
import {Header} from "./components/Navbar"
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className=" container ">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meal/:mealId" element={<SingleMeal />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
