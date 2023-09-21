import React from "react";
import Button from "../../ui/Button";
import {
  decreaseQuantity,
  increaseQuantity,
  getCurrentQuantityById,
} from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
