import React from "react";
import { NavBar } from "Components";
import "./ProductsPage.css";
import { CardGroup } from "../Components/CardGroup/CardGroup";
import { LeftAside } from "../Components/LeftAside/LeftAside";
const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="layout-main">
        <div className="layout-aside__wrapper">
      <LeftAside/>
        </div>
        <div className="layout-main__products">
          <CardGroup />
        </div>
      </div>
    </div>
  );
};

export { ProductsPage };
