import React from 'react'
import "./LeftAside.css";
import { useFilter } from "./../../ContextandReducers/FilterProvider";
const LeftAside = () => {
  const {filterDispatch,filterState}=useFilter();

  return (
    <div className="layout-aside__container">
      <button
      onClick={()=>filterDispatch({type:"CLEAR"})}
      >Clear All</button>
      <p className="fs-5 text">Sort</p>
      <ul>
        <li>
          <input
            type="radio"
            id="high_to_low"
            checked={filterState.sort === "PRICE_HIGH_TO_LOW"}
            onChange={() => {
              filterDispatch({ type: "PRICE_HIGH_TO_LOW" });
            }}
          />
          <label htmlFor="high_to_low">Price high to low</label>
        </li>
        <li>
          <input
            type="radio"
            id="low_to_high"
            checked={filterState.sort === "PRICE_LOW_TO_HIGH"}
            onChange={() => {
              filterDispatch({ type: "PRICE_LOW_TO_HIGH" });
            }}
          />
          <label htmlFor="low_to_high">Price low to high</label>
        </li>
      </ul>
      <p className="fs-5 text">Categories</p>
      <ul>
        <li>
          <input
            type="checkbox"
            id="men"
            checked={filterState.category.some(
              (item) => item === "men's clothing"
            )}
            onChange={() => {
              filterDispatch({ type: "CATEGORY", payload: "men's clothing" });
              if(filterState.sort){
                 filterDispatch({
                   type: filterState.sort               });
              }
            }}
          />
          <label htmlFor="men">Men</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="women"
            checked={filterState.category.some(
              (item) => item === "women's clothing"
            )}
            onChange={() => {
              filterDispatch({ type: "CATEGORY", payload: "women's clothing" });
              if (filterState.sort) {
                filterDispatch({
                  type: filterState.sort,
                  
                });
              }
            }}
          />
          <label htmlFor="women">Women</label>
        </li>

        <li>
          <input
            type="checkbox"
            id="electronics"
            checked={filterState.category.some(
              (item) => item === "electronics"
            )}
            onChange={() => {
              filterDispatch({ type: "CATEGORY", payload: "electronics" });
              if (filterState.sort) {
                filterDispatch({
                  type: filterState.sort,
                  
                });
              }
            }}
          />
          <label htmlFor="electronics">Electronics</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="jewelery"
            checked={filterState.category.some((item) => item === "jewelery")}
            onChange={() => {
              filterDispatch({ type: "CATEGORY", payload: "jewelery" });
              if (filterState.sort) {
                filterDispatch({
                  type: filterState.sort,
                  
                });
              }
            }}
          />
          <label htmlFor="jewelery">Jewelery</label>
        </li>
      </ul>
      <p className="fs-5 text">Brand</p>
      <ul>
        <li>
          <input
            type="checkbox"
            id="John"
            checked={filterState.brand.some((item) => item === "john")}
            onChange={() => {
              filterDispatch({ type: "BRAND", payload: "john" });
              if (filterState.sort) {
                filterDispatch({
                  type: filterState.sort,
                  
                });
              }
            }}
          />
          <label htmlFor="John">John</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="allen"
            checked={filterState.brand.some((item) => item === "allen")}
            onChange={() => {
              filterDispatch({ type: "BRAND", payload: "allen" });
              if (filterState.sort) {
                filterDispatch({
                  type: filterState.sort,
                  
                });
              }
            }}
          />
          <label htmlFor="allen">allen</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="Zara"
            checked={filterState.brand.some((item) => item === "Zara")}
            onChange={() => {
              filterDispatch({ type: "BRAND", payload: "Zara" });
              if (filterState.sort) {
                filterDispatch({
                  type: filterState.sort,
                  
                });
              }
            }}
          />
          <label htmlFor="Zara">Zara</label>
        </li>
      </ul>
    </div>
  );
}

export {LeftAside}
