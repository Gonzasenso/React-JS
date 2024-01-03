import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { ItemListContainer, NavBarComponent } from "../components";
import { ItemDetailContainer } from "../pages";
import Category from "../pages/Category";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};