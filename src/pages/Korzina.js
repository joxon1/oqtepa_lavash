import React from "react";
import { GrClose } from "react-icons/gr";
import MyButton from "../components/UI/MyButton";
import "../style/Korzina.css";
import { useCart } from "react-use-cart";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
const Korzina = () => {
  const [basket, setBasket] = useState(false);
  const showBasket = () => setBasket(!basket);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
      <div className="basket_icon_container" onClick={showBasket}>
        <h1>{totalUniqueItems} штук</h1>
        <FaShoppingCart className="basket_logo" />
      </div>
      <div className={basket ? "korzina active" : "korzina"}>
        <div className="korzina_container">
          <div className="korzina_header">
            <h1>Корзина</h1>
            <GrClose className="korzina_header_icon" onClick={showBasket} />
          </div>
          <div className="korzina_content">
            <section>
              <div>
                <table>
                  <tbody>
                    {items.map((item, index) => {
                      return (
                        <div key={index} className="basket_container">
                          <div>
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{ height: "4rem" }}
                            />
                          </div>
                          <div className="basket_text">
                            <p>{item.title}</p>
                            <b style={{ color: "red" }}>{item.price}</b>
                          </div>
                          <div className="basket_btn_container">
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <p>{item.quantity}</p>
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                            <button onClick={() => removeItem(item.id)}>
                              Remove Item
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          <div className="korzina_footer">
            <MyButton>Total Price : {totalItems} сум</MyButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Korzina;
