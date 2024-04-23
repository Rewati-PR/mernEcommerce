import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:rewatiprbhataniya@gmail.com">
        <Button>Contact: rewatiprbhataniya@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;