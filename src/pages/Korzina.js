import React from "react";
import { GrClose } from "react-icons/gr";
import MyButton from "../components/UI/MyButton";
import "../style/Korzina.css";
import { useCart } from "react-use-cart";
import { FaShoppingCart, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";
const Korzina = () => {
  const [basket, setBasket] = useState(false);
  const showBasket = () => setBasket(!basket);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
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
            {items.map((item, index) => {
              return (
                <div key={index} className="basket_container">
                  <div style={{ background: "none" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ height: "4rem", background: "none" }}
                    />
                  </div>
                  <div className="basket_text">
                    <p>{item.title}</p>
                    <b style={{ color: "red", background: "none" }}>
                      {item.price}
                    </b>
                  </div>
                  <div className="basket_btn_container">
                    <FaMinus
                      style={{ background: "none", cursor: "pointer" }}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    />
                    <p className="basket_total_item">{item.quantity}</p>
                    <FaPlus
                      style={{ background: "none", cursor: "pointer" }}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    />
                  </div>
                  <div
                    className="basket_trash"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash style={{ background: "none" }} />
                  </div>
                </div>
              );
            })}
            <div className="korzina_footer">
              <MyButton>Общая сумма : {cartTotal} сум</MyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Korzina;
