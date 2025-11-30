import React , {useState} from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { FaUser, FaEnvelope, FaMessage } from "react-icons/fa6";


const Backgorund = styled.div`
  background: linear-gradient(#8b51fe6f, #8b51fe6f, #8b51fe6f), 
    url("/public/images/WhatsApp Image 2025-11-28 at 16.43.41_edc15d8c.jpg");
  background-attachment: fixed;
  background-position: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  overflow: hidden;
`;
const Container = styled.div`
  width: 80%;
  height: 600px;
  margin: 0 auto;
  background: #f0f1f3;
  border-radius: 10px;
  padding: 50px 100px;
  display: flex;
  flex-flow: row nowrap;
`;
const Img = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
const Form = styled.form`
  width: 50%;
  height: 100%;
  padding: 30px 70px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #d8d6da;
  border-radius: 50px;
  height: 50px;
  margin: 20px 0;
  padding: 0 20px;

  svg {
    font-size: 18px;
    color: #666;
    flex-shrink: 0;
  }
`;
const Header = styled.h1`
  font-size: 35px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 700;
`;
const InputField = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  height: 100%;
  padding: 0;
  outline: none;
  font-size: 16px;
  color: #333;

  &::placeholder {
    color: #888;
  }
`;
const TextAreaWrapper = styled.div`
  height: 150px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #d8d6da;
  border-radius: 20px;
  margin: 10px 0;
  padding: 15px 20px;

  svg {
    font-size: 18px;
    color: #666;
    flex-shrink: 0;
    margin-top: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  height: 100%;
  resize: none;
  outline: none;
  font-size: 16px;
  color: #333;
  font-family: inherit;

  &::placeholder {
    color: #888;
  }
`;
const Button = styled.button`
  width: 100%;
  border-radius: 50px;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background: #9b38d0;
  color: white;
`;
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      console.error("Missing fields");
      return;
    }
        
        console.log("Message sent!");
        setFormData({ name: "", email: "", message: "" });
        console.log(formData);


  }
  return (
    <>
      <Backgorund />
      <Navbar />
      <Container>
        <Img src="/public/images/WhatsApp Image 2025-11-28 at 16.43.41_75c88794.jpg" />
        <Form onSubmit={handleSubmit} >
          <Header>Get in touch</Header>
          <InputWrapper>
            <FaUser />
            <InputField
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </InputWrapper>
          <InputWrapper>
            <FaEnvelope />
            <InputField
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </InputWrapper>
          <TextAreaWrapper>
            <FaMessage />
            <TextArea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </TextAreaWrapper>
          <Button type="submit" >Send</Button>
        </Form>
      </Container>
    </>
  );
}
