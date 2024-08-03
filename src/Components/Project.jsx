import styled from 'styled-components';

const Project = () => {
  return (
    <Container id="project">
      <Content>
        <h4>Recent Work?</h4>
        <h1>Projects</h1>
      </Content>
      <ProjectBx>
      <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/FastNews.png" alt="Weather App" />
            </ImgBox>
            <Description>
              <h2>News Application</h2>
              <ul>
                <li>I have created a news website using React.js with Vite framework for the frontend, Node.js for the backend, and styled-components for styling.</li>
                <li>Users can log in, sign up, log out, delete their accounts, and those signed up as "admin" have the additional privileges to create and delete posts.</li>
                <li>All users can view all posts, while admins can view and manage posts they created, and regular users can view all posts but cannot create or delete them.</li>
                <li>
                Users can update their email, name, role, and password, delete their account, and will get email notifications for any changes or post actions.</li>
              </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/FastNews-newsApp"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Natours.png" alt="Tour Booking Application" />
            </ImgBox>
            <Description>
              <h2>Tour Booking App</h2>
              <ul>
              <li>
                  I have created a Tour Booking app using Node.js with MongoDB,
                  Mongoose, REST APIs, and NoSQL database.
                </li><li>
                Users can see all tours. Users with the 'admin' role have additional features, such as creating tours.
                </li>
                <li>Clickable tour boxes to view detailed information about each tour and to book the tour.</li>
                <li>Added a payment integration method so users can book the tour.</li>
              </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Natours"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Disney.png" alt="Disney + Clone" />
            </ImgBox>
            <Description>
              <h2>Disney + Clone</h2>
              <ul>
                <li>I have created a Disney Clone using React.js, Firebase, and Styled
                Components.</li>
                <li>Provide full responsiveness across devices along with login and logout capabilities.</li>
                <li>Clickable movie boxes to view detailed information about each movie</li>
              </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Disney-Clone"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Twitter.png" alt="Twitter Clone" />
            </ImgBox>
            <Description>
              <h2>Twitter Clone</h2>
              <ul>
                <li>I have created a Twitter Clone using React.js, Firebase, Styled
                Components, and Redux.</li>
                <li>Users have the ability to create posts, upload images and videos, and view posts from other users.</li>
                <li>The fully responsive website seamlessly adjusts to different screen sizes, allowing users to easily log in and log out.</li>
              </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Twitter"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Linkedin.png" alt="LinkedIn Clone" />
            </ImgBox>
            <Description>
             <h2>Linkedin Clone</h2>
             <ul>
              <li> I have created a LinkedIn clone Using React.js, firebase, styled
              components and redux.</li>
              <li>This website includes functionality for logging in and logging out.</li>
              <li>The website supports uploading images and videos, allowing users to view posts made by other users.</li>
             </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/LinkedIn-Clone"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Jio-cinema.png" alt="Jio Cinema Clone" />
            </ImgBox>
            <Description>
             <h2>Jio Cinema Clone</h2>
             <ul>
              <li> I have created a Jio Cinema clone using React.js with the Vite
              framework, Firebase, and styled-components.</li>
              <li> Full responsiveness across devices with login and logout capabilities.</li>
              <li>Clickable movie boxes to view detailed information about each movie</li>
             </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Jio-Cinema"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Blog.png" alt="Blog App" />
            </ImgBox>
            <Description>
              <h2>Blog Application </h2>
              <ul>
                <li>I have created a Blog App using React.js with the Vite framework,
                Appwrite, and Tailwind CSS.</li>
                <li>Login and logout functionality.</li>
                <li>Users can view posts created by others and upload their own posts.</li>
              </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Blog-App"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Dictonary.png" alt="Dictionary App" />
            </ImgBox>
            <Description>
              <h2>Dictonary Application</h2>
              <ul>
                <li>I have created a Dictionary App using HTML, CSS, and JavaScript.</li>
                <li>Users can easily look up the meanings, definitions, and pronunciations of words. Simply type a word into the search bar and click the search button to get instant results.</li>
              </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Dictionary-App"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Country.png" alt="Country Information App" />
            </ImgBox>
            <Description>
              <h2>Country Information Application</h2>
              <ul>
                <li>I have created a Country Information App using HTML, CSS, and
                JavaScript with API integration.</li>
                <li>Users can search for a country name and get all information about that country, including the flag, time, borders, and more.</li>
              </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Country-Information-App"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <ImgBox>
              <img src="./images/Weather.png" alt="Weather App" />
            </ImgBox>
            <Description>
              <h2>Weather Application</h2>
              <ul>
                <li>I have created a Weather App using HTML, CSS and JavaScript with
                API integration.</li>
                <li>Users can search for a city name and get all the information about the current weather there.</li>
              </ul>
            </Description>
          </Wrap>
          <Btn>
            <a
              href="https://github.com/DevanshiJodhani/Weather-App"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        
      </ProjectBx>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 20px;
  color: #000;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

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

const ProjectBx = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 25px;
  gap: 50px;

  @media (max-width: 1050px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 885px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Box = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  margin: auto;

  @media (max-width: 550px) {
    max-width: 450px;
    width: 100%;
  }
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    width: 100%;
    height: auto;
  }
`;

const Wrap = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 1px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
  @media (max-width: 550px) {
    max-width: 450px;
    width: 100%;
  }
  @media (max-width: 450px) {
    max-width: 300px;
    width: 100%;
  }
`;

const ImgBox = styled.div`
  max-width: 500px;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background-color: #fff;
  border-bottom: 1px solid #aaa;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 400px) {
    width: 300px;
    height: 200px;
  }
`;

const Description = styled.p`
  padding: 10px;
  line-height: 1.3;
  font-weight: 600;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    color: #440075;
  }

  ul{
    padding-left:20px;

    li{
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const Btn = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border: 2px solid #695aa6;
    border-radius: 12px;
    background: transparent;
    font-size: 20px;
    color: #695aa6;
    z-index: 1;
    overflow: hidden;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      color: #fff;
    }
  }
  a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #695aa6;
    z-index: -1;
    transition: 0.5s;
  }

  a:hover:before {
    width: 100%;
  }
  @media (max-width: 550px) {
    bottom: 30px;
    a {
      width: 40px;
      height: 40px;
    }
  }
`;

export default Project;
