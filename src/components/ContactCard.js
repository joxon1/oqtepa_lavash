import React from "react";
import "../style/ContactCard.css";
const ContactCard = (props) => {
  return (
    <div key={props.id} className="contact_card">
      <div className="contact_wrapper">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="contact_number_card">
          <i>{props.city}</i>
          <b style={{ color: "red" }}>{props.number}</b>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
