import React from "react";
import "../style/Contact.css";
import ContactData from "../data/ContactData";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <div className="contact_container">
      <h1 style={{ margin: "2rem" }}>Контакты</h1>
      <div className="contact_wrapper">
        <div className="contact_left">
          {ContactData.map((item) => (
            <ContactCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
