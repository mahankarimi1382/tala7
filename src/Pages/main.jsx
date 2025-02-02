import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnotherPage from "./AnotherPage.jsx";
import HomePage from "./HomePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-page" element={<AnotherPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
