import { useDispatch, useSelector } from "react-redux";
import ItemList from './ItemList';
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispach = useDispatch();
  const handleClearCart = () => {
    dispach(clearCart());
  }

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl mb-5">🛒 Cart Items</h1>
      <button className="border-2 px-5 p-2 mb-2 rounded-xl bg-red-600 font-bold text-white"
      onClick={handleClearCart}>Clear 🛒 Items</button>
      <div className="bg-yellow-50 w-9/12 m-auto">
        {cartItems.map((item, index) => (
          <ItemList key={item?.card?.info?.id} items={item} />
        ))}
      </div>
      <div>
        {cartItems.length === 0 && <h1 className="text-2xl m-10 p-10 bg-yellow-300">No items in the cart 🛒</h1>}
      </div>
    </div>
  );
};

export default Cart;
