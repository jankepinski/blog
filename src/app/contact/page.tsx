"use client";

import { Box, Input, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { css } from "@emotion/css";
import { sofiaSans } from "../fonts";
import { StyledButton } from "../components/styled-button";

const submitForm = async (email: string, message: string) => {
  const response = await fetch("/api/emails", {
    method: "POST",
    body: JSON.stringify({ email, message }),
  });
  const data = await response.json();
  console.log(data);
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailCss = css`
    width: 90%;
    padding: 10px 10px 10px 10px;
    height: 36px;
    font-size: 16px;
    background-color: #1e262f;
    color: #fff;
    border: none;
    resize: none;
    &:focus {
      outline: none;
    }
  `;
  const messageCss = css`
    width: 90%;
    padding: 10px 10px 10px 10px;
    height: 400px;
    font-size: 16px;
    background-color: #1e262f;
    color: #fff;
    border: none;
    resize: none;
    &:focus {
      outline: none;
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 10px;
    }
  `;

  return (
    <form
      name="contactForm"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(email, message);
        setEmail("");
        setMessage("");
      }}
    >
      <label
        className={sofiaSans.className}
        style={{ alignSelf: "start", marginLeft: "5%", fontSize: "20px" }}
      >
        Email:
      </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={`${emailCss} ${sofiaSans.className}`}
        required
      />
      <label
        className={sofiaSans.className}
        style={{
          alignSelf: "start",
          marginLeft: "5%",
          fontSize: "20px",
          marginTop: "24px",
        }}
      >
        Message:
      </label>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className={`${messageCss} ${sofiaSans.className}`}
        required
      ></textarea>
      <Box sx={{mt: 5}}>
        <StyledButton buttonProps={{ type: "submit" }}>Send</StyledButton>
      </Box>
    </form>
  );
}
