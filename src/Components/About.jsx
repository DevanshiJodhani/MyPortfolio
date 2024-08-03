import styled from 'styled-components';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Devanshi_Jodhani_Resume.pdf';
    link.download = 'Devanshi_Jodhani_Resume.pdf';
    link.click();
  };

  return (
    <Container id="about">
      <Content>
        <Left>
          <h4>Who Am I?</h4>
          <h1>About Me</h1>
          <p>
            As a frontend developer specializing in React, Vitest for testing,
            Firebase, Appwrite, JavaScript, Tailwind CSS, HTML, and CSS, I
            create dynamic and responsive web applications. My portfolio
            showcases a variety of projects, including a Disney clone,
            JioCinema, LinkedIn clone, and a blog application using Appwrite.
            Additionally, I've developed several JavaScript-based applications
            such as a country information app, dictionary app, weather app, and
            bookstore application. While my primary focus is on frontend
            development, I also possess full-stack development skills with
            proficiency in Node.js. My ability to bridge the gap between design
            and functionality allows me to deliver comprehensive and scalable
            digital solutions. Explore my work to see how I bring ideas to life
            through code and design.
          </p>
          <button onClick={handleDownload}>Download Resume</button>
        </Left>
        <Right>
          <img src="./images/about.jpg" alt="About me" />
        </Right>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 20px;
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 990px) {
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  max-width: 60%;
  width: 100%;
  margin-top: 20px;

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

  p {
    line-height: 1.4;
    color: #111;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-bottom: 30px;
    text-align: justify;
  }

  button {
    padding: 12px 30px;
    background: transparent;
    border-radius: 25px;
    border: 1px solid #695aa6;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #695aa6;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      background: #695aa6;
      color: #fff;
    }
  }

  @media screen and (max-width: 990px) {
    max-width: 40%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 80px;
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    padding: 0 20px;
  }
`;

const Right = styled.div`
  max-width: 40%;
  width: 100%;
  border-radius: 67% 33% 40% 60% / 50% 42% 58% 50%;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 500px;
      height: 500px;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      width: 350px;
      height: 350px;
    }
  }
`;

export default About;
