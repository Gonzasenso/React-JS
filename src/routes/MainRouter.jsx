import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category";

const MainRoutes= () => {
    return (
       <Router>
        <NavBarComponent />
        <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/category:categoryId" element={<Category/>} /> 
        </Routes>
       </Router>
    );
};
 
export default MainRoutes; 