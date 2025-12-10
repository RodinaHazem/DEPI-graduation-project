// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import {Circles} from "react-loader-spinner"

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
  height: 650px;
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
  background-color: ${(props) => (props.disabled ? "#bdb2ff" : "#8c51fe")};
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
align-items: center;
justify-content: center;
display: flex;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
`;

export default function Register() {
   const[loading , setLoading] = useState(false);
  const Yup = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: yup
      .string()
      .matches(/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format")
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d).+$/,
        "Password must contain at least one letter and one number"
      ),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: Yup,
    onSubmit: handleSubmit,
  });
  let navigate = useNavigate();
  async function handleSubmit(values) {
    setLoading(true);
    
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", values);
      setLoading(false);
      if (res.status === 200) {
        navigate("/UserDashboard");
        setLoading(false);
        window.localStorage.setItem("email", values.email);
      }
      console.log("register success:", res.data);
    } catch (err) {
      console.error("register error:", err.response.data?.message.toString() || err);
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
        <Form onSubmit={formik.handleSubmit}>
          <Title>Register Here</Title>
          <div>
            <Label htmlFor="Username">Username</Label>
            <Input
              name="name"
              type="text"
              id="Username"
              placeholder="RodyHazem"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <span className="text-danger">{formik.errors.name}</span>
          ) : null}
          <div>
            <Label htmlFor="Email">Email address</Label>
            <Input
              name="email"
              type="email"
              id="Email"
              placeholder="rody@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <span className="text-danger">{formik.errors.email}</span>
          ) : null}
          <div>
            <Label htmlFor="Password">Password</Label>
            <Input
              name="password"
              type="password"
              id="Password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="text-danger">{formik.errors.password}</span>
            ) : null}
          </div>
          <div>
            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <Input
              name="repassword"
              type="password"
              id="ConfirmPassword"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              value={formik.values.repassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.repassword && formik.errors.repassword ? (
              <span className="text-danger">{formik.errors.repassword}</span>
            ) : null}
          </div>
          <p>
            Already hava an account?
            <Link className="text-decoration-none" to="/login">
              Login
            </Link>
          </p>
          {loading ? (
            <SignUp type="button">
              <Circles
  height="20"
  width="20"
  color="#ffffff"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
                visible={true}

/>
            </SignUp>
          ) : (
            <SignUp disabled={!(formik.isValid && formik.dirty)} type="submit">
              Sign Up
            </SignUp>
          )}
        </Form>
      </Container>
    </Div>
  );
  
}