import axios from "axios";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;
const shine = keyframes`
	0%{
		transform: scale(1.01);
		box-shadow: none;
	}
	50%{
		transform: scale(0.99);
		box-shadow: 0 0 20px 1px ${(props) => (props.color ? props.color : "#8c51fe")};
	}
	100%{
		transform: scale(1.01);
		box-shadow: 0 0 20px 1px ${(props) => (props.color ? props.color : "#8c51fe")};
	}
`;
export const BgCircle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : "#8c51fe")};
  position: absolute;
  z-index: -1;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  scale: ${(props) => props.scale};
  animation: ${shine} 2s ease-in-out infinite;
  `;
export const Div = styled.div`
  background: #fbf8ff;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const Container = styled.div`
  width: 80%;
`;
export const LogoName = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 60%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  width: 600px;
  height: 600px;
  box-shadow: 0 0 20px 1px #00000042;
  background-color: #ffffff8e;
  backdrop-filter: blur(2px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
  animation: ${fadeIn} 0.8s ease-in-out;
`;
export const Title = styled.h1`
  font-size: 42px;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(90deg, #8c51fe, #bdb2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
export const Input = styled.input`
  padding: 10px;
  height: 40px;
  width: 100%;
  outline-width: 2px;
  outline-color: #8c51fe;
  border: none;
  border-radius: 5px;
  background-color: #00000020;
  caret-color: #8c51fe;
`;
export const Label = styled.label`
  display: block;
  margin-top: 8px;
`;
export const SignUp = styled.button`
  background-color: #8c51fe;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
`;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PassError, setPassError] = useState("");
  const [EmailError, setEmailError] = useState("");

  // Regex patterns
  const Passregex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  const Emailregex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  async function handleSubmit(e) {
    e.preventDefault();
    if (!Passregex.test(password) || password.length < 10) {
      setPassError(
        <span className="text-danger">
          Password must be at least 10 and contain at least one letter , one
          number and one character!
        </span>
      );
    } else {
      setPassError("");
    }
    if (!Emailregex.test(email)) {
      setEmailError(
        <span className="text-danger">Please enter a valid email address!</span>
      );
    } else {
      setEmailError("");
    }
  

    if (PassError || EmailError) return;

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
         if (res.status === 200 && email=== "RoduHazem@gmail.com" && password==="Rody123@123") {
           window.localStorage.setItem("email", email);
           window.location.pathname = "/login/dashboard/admin/pages/Trips";
          } else if (res.status === 200) {
           window.location.pathname = "/";
           
         }
           console.log("login success:", res.data);
    } catch (err) {
      console.error("login error:", err.response || err);
    }
  }

  return (
    <Div>
      <BgCircle top="-100" left="-100" color="#a0c4ff" />
      <BgCircle top="500" left="600" scale="0.8" />
      <BgCircle top="50" left="400" scale="0.4" color="#dec0f1" />
      <BgCircle top="80" left="1000" scale="1.1" color="#bdb2ff" />
      <LogoName>
        <img
          src="../../../public/icons/Black_and_White_Elegant_Letter_G_Beauty_Logo-removebg-preview.png"
          alt="logo"
          style={{
            height: 100,
            scale: "3",
            margin: "auto",
          }}
        />
      </LogoName>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <div>
            <Label htmlFor="Email">Email address</Label>
          <Input
            type="email"
            id="Email"
            placeholder="rody@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {EmailError ? <div>{EmailError}</div> : ""}
          </div>
          <div>
            <Label htmlFor="Password">Password</Label>
            <Input
              type="password"
              id="Password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {PassError ? <div>{PassError}</div> : ""}
          </div>
          <SignUp type="submit">SignIn</SignUp>
        </Form>
      </Container>
    </Div>
  );
}
