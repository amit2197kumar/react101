const ItemList = ({ items }) => {
  return (
    <div className="border border-gray-200 border-2 rounded-xl my-2">
      <div>
        <div className="font-bold">{items.card?.info?.name}</div>
        <div>{items.card?.info?.description}</div>
        <div>Price: ₹ {items.card?.info?.price / 100}/-</div>
      </div>
    </div>
  );
}

export default ItemList;