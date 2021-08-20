import React from "react"
import { useState } from "react"
import { TextField } from "@material-ui/core"
import axios from "axios"
import { emailValidator } from "../functions/validator"
import { Button, Text, heading } from "theme-ui"
import SectionHeading from "components/section-heading"
import { Fragment } from "react"

function Contact() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    let isEmailVerified = emailValidator(mail)
    if (isEmailVerified === true) {
      const tableData = { name, mail, number, message }
      //   axios
      //     .post(
      //       "",
      //       tableData
      //     )
      //     .then((response) => {
      //       alert("Thank you our team will reach out to you as soon as possible.");
      //     });
      alert("Thank you our team will reach out to you as soon as possible.")
      setName("")
      setNumber("")
      setMail("")
      setMessage("")
    } else {
      alert("Enter valid email")
    }
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler} style={formStyle}>
        <SectionHeading
          sx={headingStyles}
          title={<Fragment>Drop us a line!</Fragment>}
          description='We usually respond within 24 business hours'
        />

        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          style={textFieldStyle}
          label='Name'
          variant='outlined'
        />

        <TextField
          required
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          style={textFieldStyle}
          label='Email'
          variant='outlined'
        />

        <TextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={textFieldStyle}
          label='Telephone number'
          variant='outlined'
        />
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textFieldStyle}
          label='Message'
          multiline
          rows={4}
          variant='outlined'
        />

        <Button type='submit' style={buttonStyle}>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href='tel:07798947762'>
            {mail.length === 0 ? "*Email " : "Send"}{" "}
          </a>
        </Button>
      </form>
    </Fragment>
  )
}

export default Contact

const buttonStyle = {
  marginBottom: "10px",
  width: "200px",
}

const textFieldStyle = {
  marginBottom: "10px",
}

const headingStyles = {
  background: "white",
  textAlign: "left",
  mb: ["20px"],
  mt: [0, 0, "-70px"],
  h2: {
    fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
    lineHeight: [1.25, 1.5],
    letterSpacing: "-1.5px",
    br: {
      display: ["none", "none", "none", "block"],
    },
  },
  p: {
    mt: ["15px", "10px"],
  },
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  background: "white",
  paddingRight: "200px",
  paddingLeft: "200px",
  paddingTop: "90px",
  paddingBottom: "40px",
}
