import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnotherPage from "./AnotherPage.jsx";
import HomePage from "./HomePage.jsx";
import HoverPage from "./HoverPage.jsx";
import Mytester from "../mytester.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import AddNews from "../AddNews.jsx";
import Products from "./AdminPanel/BasicDetails/Products.jsx";
import { ToastContainer } from "react-toastify";
import MasterProduct from "./AdminPanel/BasicDetails/MasterProduct.jsx";
import SubMasterProduct from "./AdminPanel/BasicDetails/SubMasterProduct.jsx";
import AddToVitrin from "./AdminPanel/SaleAction/Vitrin/AddToVitrin.jsx";
import AddToSafeBox from "./AdminPanel/SaleAction/SafeBox/AddToSafeBox.jsx";
import News from "./AdminPanel/News/News.jsx";
import CreateSeller from "./AdminPanel/BasicDetails/CreateSeller.jsx";
import WalletToman from "./AdminPanel/Wallet/WalletToman.jsx";
import WalletTala from "./AdminPanel/Wallet/WalletTala.jsx";
import WalletAghsat from "./AdminPanel/Wallet/WalletAghsat.jsx";
import Rate from "./AdminPanel/rate/rate.jsx";
import Setting from "./AdminPanel/setting/Setting.jsx";
import AllProducts from "../AllProducts.jsx";
import ShoppingCartPage from "./AdminPanel/BasicDetails/ShoppingCartPage.jsx";
import InstallmentRequest from "../InstallmentRequest.jsx";
import InstallmentTrack from "../InstallmentTrack.jsx";
// import InstallmentInspection from "./AdminPanel/BasicDetails/InstallmentInspection.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-product" element={<AnotherPage />} />
        <Route path="/hover-product-page" element={<HoverPage />} />
        <Route path="/userPanel" element={<Mytester />} />
        <Route path="/ShoppingCart" element={<ShoppingCartPage />} />
        <Route path="/installments/request" element={<InstallmentRequest />} />
        <Route path="/installments/track" element={<InstallmentTrack />} />
        
        <Route
          path="/AdminPannel/basic-details/products"
          element={<Products />}
        />
        <Route
          path="/AdminPannel/basic-details/add-master-product"
          element={<MasterProduct />}
        />
        <Route
          path="/AdminPannel/basic-details/add-subbmaster-product"
          element={<SubMasterProduct />}
        />
        <Route
          path="/AdminPannel/basic-details/create-seller"
          element={<CreateSeller />}
        />
        <Route
          path="/AdminPannel/sale-action/vitrin"
          element={<AddToVitrin />}
        />
        <Route
          path="/AdminPannel/sale-action/safe-box"
          element={<AddToSafeBox />}
        />
        <Route path="/AdminPannel/wallet/gold" element={<WalletTala />} />
        <Route path="/AdminPannel/wallet/tooman" element={<WalletToman />} />
        <Route path="/AdminPannel/wallet/Aghsat" element={<WalletAghsat />} />

        <Route path="/AdminPannel/rate" element={<Rate />} />
        <Route path="/AdminPannel/setting" element={<Setting />} />

        <Route path="/AdminPannel/news" element={<News />} />
        <Route path="/AddSomeNews" element={<AddNews />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        {/* <Route path="/AdminPannel/InstallmentInspection" element={<InstallmentInspection />} /> */}
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
