import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const location = useLocation();
  const pn = location.pathname;
  let pathName = pn?.substring(1);
  // title
  useEffect(() => {
    if (pn === "/") {
      document.title = "home";
    } else {
      document.title = pathName;
    }
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>} />

        <Route path="/8" element={<NotFound />} />
      </Routes>
    
      
    </div>
  );
}

export default App;
