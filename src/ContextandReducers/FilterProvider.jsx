import React from "react";
import { createContext, useContext, useReducer } from "react";
import data from "./../data.json";
const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const products = data["products"];
const FilterProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "PRICE_HIGH_TO_LOW":
        return {
          ...state,
          products: state.products.sort(({ price: a }, { price: b }) => {
            return +b - +a;
          }),
          sort: "PRICE_HIGH_TO_LOW",
        };
      case "PRICE_LOW_TO_HIGH":
        return {
          ...state,
          products: state.productsBackUp.sort(({ price: a }, { price: b }) => {
            return +a - +b;
          }),
          sort: "PRICE_LOW_TO_HIGH",
        };
      case "CATEGORY": {
        if (state.category.includes(action.payload)) {
          const category = state.category.filter(
            (item) => item !== action.payload
          );

          return {
            ...state,
            category,
            products: state.productsBackUp.filter((item) => {
              if (category.length > 0 && state.brand.length > 0)
                return (
                  category.includes(item.category) &&
                  state.brand.includes(item.brand)
                );
                else if(category.length>0) return category.includes(item.category);
                else if(state.brand.length>0) return state.brand.includes(item.brand);
              else return item;
            }),
          };
        } else {
          const categoryArr = [...state.category, action.payload];
          
          return {
            ...state,
            category: categoryArr,
            products: state.productsBackUp.filter((item) => {
              if (state.brand.length > 0)
                return (
                  categoryArr.includes(item.category) &&
                  state.brand.includes(item.brand)
                );
              else return categoryArr.includes(item.category);
            }),
          };
        }
      }
      case "BRAND": {
        if (state.brand.includes(action.payload)) {
          const brand = state.brand.filter((item) => item !== action.payload);

          return {
            ...state,
            brand,
            products: state.productsBackUp.filter((item) => {
              if (brand.length > 0 &&state.category.length>0) return brand.includes(item.brand)&& state.category.includes(item.category);
              else if(brand.length>0) return brand.includes(item.brand);
              else if(state.category.length>0) return state.category.includes(item.category);
              else return item;
            }),
          };
        } else {
          const brand = [...state.brand, action.payload];
          return {
            ...state,
            brand,
            products: state.productsBackUp.filter((item) => {
            if(state.category.length>0)  return brand.includes(item.brand)&& state.category.includes(item.category);
             else  return brand.includes(item.brand);
            }),
          };
        }
      }
      case "CLEAR":
        return {
          products,
          productsBackUp: products,
          sort: "",
          category: [],
          brand: [],
        };

      default:
        break;
    }
  };
  const [filterState, filterDispatch] = useReducer(reducer, {
    products,
    productsBackUp: products,
    sort: "",
    category: [],
    brand: [],
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
