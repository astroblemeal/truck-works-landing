import React from "react";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { emailValidator } from "../functions/validator";
import {  Button } from 'theme-ui';



function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let isEmailVerified = emailValidator(mail);
    if (isEmailVerified === true) {
      const tableData = { name, mail, number, message };
      axios
        .post(
          "",
          tableData
        )
        .then((response) => {
          alert("Thank you our team will reach out to you as soon as possible.");
        });

      setName("");
      setNumber("");
      setMail("");
      setMessage("");
    } else {
      alert("Enter valid email");
    }
  };

  return (
  <div >
      <form style={{display: "flex", flexDirection: "column", margin: "20px 60px 20px 60px"}}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
        style={textFieldStyle}
       
          label='name'
          variant="outlined"
        />

        <TextField
          required
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        style={textFieldStyle}
       
          label="Mail"
          variant="outlined"
        />

        <TextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
         style={textFieldStyle}
      
          label='number'
          variant="outlined"
        />
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textFieldStyle}
          label='message'
          multiline
          rows={4}
          variant="outlined"
        />
        <Button style={buttonStyle}  variant="primary">
            <a style={{textDecoration: "none", color: "white"}} href="tel:07798947762">Send</a>
        </Button>
      </form>

     </div>
  );
}

export default Contact;

const buttonStyle = {
    marginTop: "10px",
    width: "200px"
}

const textFieldStyle = {
      marginTop: "10px"
}
