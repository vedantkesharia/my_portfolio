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
import videoverse_img from "../assets/img/videoverse_img.jpeg"
import todo_img from "../assets/img/todo_img.jpeg"
import quizcards_img from "../assets/img/quizcards_img.jpeg"
import flexibble_img from "../assets/img/flexibble_img.jpeg"
import blognest_img from "../assets/img/blognest_img.jpeg"
import iphone_site_img from "../assets/img/iphone_site_img.jpeg"
import brainai_img from "../assets/img/brainai_img.jpeg"
import codesync_img from "../assets/img/codesync_img.jpg"
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
      projecturl:'https://github.com/vedantkesharia/vedant1_cdac/tree/master'
    },
    {
      title: "SocialBay",
      description: "This is a social media website made by tools like MUI, ReactJs, NodeJs, ExpressJs, MongoDB etc...",
      imgUrl: socialbay_img,
      projecturl:'http://thesocialbay.netlify.app/'
    },
    {
      title: "EverNote",
      description: "Note taking application using ReactJs, HTML, Bootstrap, NodeJs, ExpressJs, MongoDB, Rest API, jwt authentication etc... ",
      imgUrl: evernote_img,
      projecturl:'https://myevernotes.netlify.app/'
    },
    {
      title: "VideoVerse",
      description: "Youtube clone using API fetching with video search play functionality using ReactJs, Material UI",
      imgUrl: videoverse_img,
      projecturl:'http://thevideoverse.netlify.app/'
    },
    {
      title: "CodeSync",
      description: "A code sharing web application where users can save and share their code snippets using NextJs, TailwindCSS, MongoDB, NodeJS",
      imgUrl: codesync_img,
      projecturl:'https://codesyncweb.vercel.app/'
    },
    {
      title: "BrainAI",
      description: "An AI web application with functions like code/music/video/image generation from any text",
      imgUrl: brainai_img,
      projecturl:"https://brainai.vercel.app/"
    },
   
    
  ];

  const projects2=[

    {
      title: "TextUtils",
      description: "An app that accepts text from user and performs certain tasks like Text to Speech,removing extra spaces,converting to upper/lower case etc...",
      imgUrl: textutils_img,
      projecturl:"https://github.com/vedantkesharia/TextUtils-App/tree/master"
    },
    {
      title: "Flexibble",
      description: " Full stack web application to showcase and share your projects ,Tech : NextJS, HTML, Tailwind CSS, cloudinary, NodeJs",
      imgUrl: flexibble_img,
      projecturl:"https://flexibble-flax.vercel.app/"
    },
    {
      title: "BlogNest",
      description: " A full stack web application where users can create and showcase their own personalized blogs using Reactjs, NodeJs, ExpressJs, Bootstrap",
      imgUrl: blognest_img,
      projecturl:"https://github.com/vedantkesharia/BlogNest/tree/master"
    },
    {
      title: "Iphone Landing Site",
      description: "Iphone landing site using GSAP animation, threejs, HTML",
      imgUrl: iphone_site_img,
      projecturl:"http://iphonelandingsite.netlify.app/"
    },
    {
      title: "vChat",
      description: "A real time chatting application using ReactJs, CSS, HTML, Firebase",
      imgUrl: vchat_img,
      projecturl:'https://github.com/vedantkesharia/vchat/tree/master'
    },
    {
      title: "NewsToday",
      description: "A website that provides latest news cards to the user API fetching,ReactJs, HTML, Bootstrap, javascript etc...",
      imgUrl: newstoday_img,
      projecturl:"https://github.com/vedantkesharia/News-App_newstoday/tree/master"
    },
  ]

  const handleclick = (projecturl) => {
    if (projecturl) {
      window.location.href = projecturl;
    }
  }

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
                                onClick={handleclick}
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
                                onClick={handleclick}
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