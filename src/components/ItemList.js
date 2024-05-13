import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispach = useDispatch();

  const handleAddToCart = (items) => {
    console.log("Add to cart", items);
    dispach(addItem(items));
  }

  return (
    <div className=" border-gray-200 border-2 rounded-xl my-2">
      <div>
        <div className="font-bold">{items.card?.info?.name}</div>
        <div>{items.card?.info?.description}</div>
        <div>Price: ₹ {items.card?.info?.price / 100}/-</div>
        <div>
          <button className="border-2 rounded-xl m-2 px-5 py-2 bg-red-500 text-black font-bold hover:bg-white"
            onClick={() => handleAddToCart(items)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemList;