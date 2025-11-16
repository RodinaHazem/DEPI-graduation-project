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

export const Div = styled.div`
  background-image: url("../../../public/images/login image.jpg");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 80%;`
export const LogoName = styled.div`
display: flex;
  align-items: center;
`

export const Form = styled.form`
  width: 50%;
  background-color: rgba(255, 255, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  animation: ${fadeIn} 0.8s ease-in-out;
`;
export const Input = styled.input`
  padding: 5px;
  height: 40px;
  width: 100%;
  outline: none;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid;
  background-color: transparent;
`;
export const Label = styled.label`
  display: block;
  margin-top: 8px;
`
export const SignUp = styled.button`
  background-color: #8c51fe;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
`;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [PassError, setPassError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [NameError, setNameError] = useState("");

  // Regex patterns
  const Passregex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  const Emailregex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const Nameregex = /^[A-Za-z]{2,}(?: [A-Za-z]{2,})*$/;
  function handleSubmit(e) {
    e.preventDefault();
    if (!Passregex.test(password)) {
      setPassError(
        <span className="text-danger">
          Password must contain at least one letter , one number and one
          character!
        </span>
      );
    } else if (password.length < 10) {
      setPassError("error");
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
    if (!Nameregex.test(name)) {
      setNameError(
        <span className="text-danger">Please enter a valid name!</span>
      );
    } else {
      setNameError("");
    }
  }
  return (
    <Div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <LogoName>
            <img
              src="../../../public/icons/Black_and_White_Elegant_Letter_G_Beauty_Logo-removebg-preview.png"
              alt="logo"
              style={{
                height: 100,
                scale: "2",
                margin: "auto"
              }}
            />
          </LogoName>
          <div>
            <Label htmlFor="Username">Username</Label>
            <Input
              type="text"
              id="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {NameError ? <div>{NameError}</div> : ""}
          <div>
            <Label htmlFor="Email">Email address</Label>
            <Input
              type="email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {EmailError ? <div>{EmailError}</div> : ""}
          <div>
            <Label htmlFor="Password">Password</Label>
            <Input
              type="password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {PassError ? <div>{PassError}</div> : ""}
          </div>
          <div>
            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="ConfirmPassword"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
            {repassword !== password && PassError == "" ? (
              <span>Passwords do not match!</span>
            ) : (
              ""
            )}
          </div>
          <p>
            Already hava an account?
            <a className="text-decoration-none" href="">
              Login Now
            </a>
          </p>
          <SignUp type="submit">Sign Up</SignUp>
        </Form>
      </Container>
    </Div>
  );
}
