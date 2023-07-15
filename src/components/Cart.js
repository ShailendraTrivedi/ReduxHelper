import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  removeItem,
} from "../redux/action/cartAction";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  // Calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price.replace("₹", "").replace(",", "") * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => {
        const { id, name, price, quantity } = item;
        const numberPrice = price.replace("₹", "").replace(",", "");
        const totalPrice = numberPrice * quantity;
        return (
          <div className="flex flex-col border-2 border-black" key={id}>
            <div>
              Name: {name.length > 50 ? name.substring(0, 50) + "..." : name}
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleIncreaseQuantity(id)}>+</button>
              Quantity: {quantity}
              <button onClick={() => handleDecreaseQuantity(id)}>-</button>
            </div>
            <div className="flex justify-between mx-10">
              Total Price: {totalPrice}
              <button
                onClick={() => handleRemoveItem(id)}
                className="underline text-blue-700"
              >
                Remove Item
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex gap-10 mx-1">
        <button className="h-[2rem] w-[10rem] bg-blue-700 text-white rounded">
          Buy Button
        </button>
        <button
          onClick={handleClearCart}
          className="h-[2rem] w-[10rem] bg-blue-700 text-white rounded"
        >
          Clear Cart
        </button>
      </div>
      <div className="">Total Price: {totalAmount}</div>
    </div>
  );
};

export default Cart;
