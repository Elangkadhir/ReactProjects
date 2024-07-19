import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "../Components/Pages/IntroPage";
import ScrollPage from "../Components/Pages/ScrollPage";
import Accordion from "../Components/Pages/Accordion";
import ColorGenerator from "../Components/Pages/RandomColorGenerator";

function PageRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IntroPage />} />
        <Route path={"/scroll_page"} element={<ScrollPage />} />
        <Route path={"/accordion"} element={<Accordion />} />
        <Route path={"/colorgenerator"} element={<ColorGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouting;
