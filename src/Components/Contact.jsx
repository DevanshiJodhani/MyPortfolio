import styled from 'styled-components';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from './Model';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [modalMessage, setModalMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_it411zh',
        'template_8r4sq5h',
        templateParams,
        'gtdSTvYnxaaPDyjR5'
      )
      .then(
        (result) => {
          console.log('Email sent sccessfully:', result.text);
          setModalMessage('Message sent successfully!');
          setIsModalVisible(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('Email sending error:', error.text);
          setModalMessage('Failed to send message. Please try again later.');
          setIsModalVisible(true);
        }
      );
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Container id="contact">
      <Content>
        <h4>How can you communicate?</h4>
        <h1>Contact Me</h1>
        <Form onSubmit={handleSubmit}>
          <InputField>
            <input
              type="text"
              name='name'
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name='email'
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputField>
          <TextareaField>
            <textarea
              name="message"
              placeholder="Write Something"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </TextareaField>
          <Btn>Send Message</Btn>
        </Form>
        {isModalVisible && (
          <Modal message={modalMessage} onClose={closeModal} />
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 20px;
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: #444444;
    margin-bottom: 12px;
  }
  h1 {
    font-size: 40px;
    color: #695aa6;
    font-weight: 900;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 50px;
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const TextareaField = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 16px;
  }
`;

const Btn = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  border: 1px solid #695aa6;
  background: transparent;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #695aa6;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.5s ease;

  &:hover {
    background: #695aa6;
    color: #fff;
  }
`;

export default Contact;
