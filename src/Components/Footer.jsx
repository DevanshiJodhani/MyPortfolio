import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Content>
        <Copy>
            <p>Copyright &copy; 2024 by Devanshi Jodhani | All Rights Reserved.</p>
        </Copy>
        <SocialLinks>
            <a href="https://github.com/AnkitJodhani" target='_blank'>
            <i class='bx bxl-github'></i>
            </a>
            <a href="https://www.linkedin.com/in/ankit-jodhani/" target='_blank'>
            <i class='bx bxl-linkedin-square' ></i>
            </a>
            <a href="https://twitter.com/Ankit__Jodhani" target='_blank'>
            <i class='bx bxl-twitter' ></i>
            </a>
        </SocialLinks>
        
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  width: 70%;
  
  margin: auto;
  border-top: 1px solid #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  @media screen and (max-width: 768px) {
    width: 100%;

  }

  @media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    } 
`;

const Copy = styled.div`
    color: #6c757d;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 15px;
    }


`;

const SocialLinks = styled.div`
display: flex;
justify-content:center;
align-items: center;
a{
    margin-left: 20px;
    width: 50px;
    height: 50px;
    border: 2px solid #6c757d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 25px;
    color: #6c757d;
    transition: 0.5s ease;

    &:hover{
        background: #695aa6;
        color: #fff;
        border: none;
    }
}
`;

export default Footer;