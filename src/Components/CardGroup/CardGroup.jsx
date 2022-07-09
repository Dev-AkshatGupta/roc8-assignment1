import React from 'react';
import "./CardGroup.css";
import {Card} from "./../Card/Card";
import  {useFilter} from "./../../ContextandReducers/FilterProvider";
const CardGroup = () => {
      const { filterDispatch, filterState } = useFilter();
  return (
    <div class="card-group ">
    { filterState.products.map(item=><Card item={item}></Card>)}
    </div>
  );
}

export  {CardGroup}
