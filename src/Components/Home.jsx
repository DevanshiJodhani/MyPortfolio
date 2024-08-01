import styled from 'styled-components';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
  return (
    <Container>
      <Content>
        <Info>
          <h4>Looking for a web devloper!</h4>
          {/* <span>Hello,</span> */}
          <h2>I'm Devanshi <br />Jodhani</h2>
          <p>
            As a full stack developer skilled in Node.js, React, Vitest testing, Firebase, Appwrite, JavaScript, Tailwind CSS, HTML, and CSS, I have created numerous projects showcasing my expertise. 
          </p>
          <a href='#contact'>Contact Me</a>
        </Info>
      </Content>
      <About />
      <Project />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to top,
      #fff,
      rgba(105, 90, 166, 0.23) 99%,
      rgba(105, 90, 166, 0.269) 100%
    ),
    url('./images/home_bg.avif');
  background-position: center top;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 30px;

  h4 {
    font-size: 22px;
    color: #695aa6;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 60px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    color: #333;
    line-height: 1.7;
    margin-bottom: 50px;
  }
  a {
    text-decoration: none;
    padding: 12px 30px;
    background: transparent;
    color: #695aa6;
    border: 1px solid #695aa6;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      background: #695aa6;
      color: #fff;
    }
  }

  @media screen and (max-width: 500px) {
    h4{
        font-size: 20px;

    }
    h2{
        font-size: 40px;
    }
    p{
        font-size: 18px;
    }
  }
`;

export default Home;
