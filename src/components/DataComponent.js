import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action/dataAction";
import { addToCart } from "../redux/action/cartAction";
const DataComponent = () => {
  const dispatch = useDispatch();
  const ShoppingData = useSelector((state) => state.datas.data?.ShoppingData);
  const loading = useSelector((state) => state.datas.loading);
  const error = useSelector((state) => state.datas.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      {ShoppingData ? (
        <>
          <div className="flex flex-col gap-10">
            {Object.keys(ShoppingData).map((itemType) => {
              const items = ShoppingData[itemType];
              return (
                <div
                  key={itemType}
                  className="flex flex-col border-2 border-black p-10 gap-10"
                >
                  <h1 className="text-3xl font-bold">{itemType}</h1>
                  {items.map((item) => {
                    const { id, image, list, name, price } = item;
                    return (
                      <div key={id} className="border-2 border-black">
                        <div>
                          {" "}
                          <span className="font-bold">Name:</span> {name}
                        </div>
                        <ul className="p-10">
                          <span className="font-bold">Specification :</span>
                          {list.map((itemList, i) => (
                            <>
                              <li key={i}>{itemList.l}</li>
                            </>
                          ))}
                        </ul>
                        <div className="font-bold text-xl">{price}</div>
                        <button
                          className="flex justify-center items-center w-full bg-blue-700 text-white"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default DataComponent;
