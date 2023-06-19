import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cdac_img from "../assets/img/cdac_img.jpeg"
import evernote_img from "../assets/img/Evernote_img.jpeg"
import socialbay_img from "../assets/img/SocialBay_img.jpeg"
import textutils_img from "../assets/img/textutils_img.jpeg"
import newstoday_img from "../assets/img/newstoday_img.jpeg"
import vchat_img from "../assets/img/vchat_img.jpeg"
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import navIcon2 from '../assets/img/nav-icon2.svg';
//id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""} line 83

export const Projects = () => {

  const Clickhere = () =>{
    window.location.href="https://github.com/vedantkesharia";
  }

  const projects = [
    {
      title: "Ongoing Cdac Project",
      description: "Virtual lab for students to explain them probability using dice simulation",
      imgUrl: cdac_img,
    },
    {
      title: "SocialBay",
      description: "This is a social media website made by tools like MUI, ReactJs, NodeJs, ExpressJs, MongoDB etc...",
      imgUrl: socialbay_img,
    },
    {
      title: "EverNote",
      description: "Note taking application using ReactJs, HTML, Bootstrap, NodeJs, ExpressJs, MongoDB, Rest API, jwt authentication etc... ",
      imgUrl: evernote_img,
    },
    
  ];

  const projects2=[
    {
      title: "NewsToday",
      description: "A website that provides latest news cards to the user API fetching,ReactJs, HTML, Bootstrap, javascript etc...",
      imgUrl: newstoday_img,
    },
    {
      title: "vChat",
      description: "A real time chatting application using ReactJs, CSS, HTML, Firebase",
      imgUrl: vchat_img,
    },
    {
      title: "TextUtils",
      description: "An app that accepts text from user and performs certain tasks like Text to Speech,removing extra spaces,converting to upper/lower case etc...",
      imgUrl: textutils_img,
    },
  ]


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Fade left cascade>
                <h2>Projects</h2>
                <p>Here is a list of my projects with images and description of each project.These projects include some of my Frontend as well as FullStack projects.</p>
                </Fade>

                <Fade left >
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>You can view all these projects on my github repository...
                        <br />
                        <br />
                      <button onClick={Clickhere} className="project-text2"><span>Click Here...</span></button>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </Fade>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}