import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "../Components/Pages/IntroPage";
import ScrollPage from "../Components/Pages/ScrollPage";

function PageRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IntroPage />} />
        <Route path={"/scroll_page"} element={<ScrollPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouting;
