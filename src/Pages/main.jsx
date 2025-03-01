import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnotherPage from "./AnotherPage.jsx";
import HomePage from "./HomePage.jsx";
import HoverPage from "./HoverPage.jsx";
import Mytester from "../mytester.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import Admin from "./Admin.jsx";
import AddNews from "../AddNews.jsx";





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-product" element={<AnotherPage />} />
        <Route path="/hover-product-page" element={<HoverPage />} />
        <Route path="/testpage" element={<Mytester/>} />
        <Route path="/AdminPannel" element={<Admin/>} />
        <Route path="/AddSomeNews" element={<AddNews/>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
