import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import headerImg3 from "../assets/img/header5_img.png";
import globe_img from "../assets/img/globe_img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
// import Reveal from 'react-reveal/Reveal';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Fade from "react-reveal/Fade";
import { Particle } from "./Particle";

// className={isVisible ? "animate__animated animate__fadeIn" : ""} line 70
// className={isVisible ? "animate__animated animate__zoomIn" : ""} line 90
//dataPeriod="1000" line 74

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Frontend Developer", "Backend Developer"];
  const period = 2000;


// const options1 = {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.2,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 5,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 20,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 300,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 2
//       },
//       "move": {
//         "enable": true,
//         "speed": 12,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": false,
//           "mode": "grab"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "grab"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 800,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 800,
//           "size": 80,
//           "duration": 2,
//           "opacity": 0.8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 400,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
// }

  const options = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        // value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
        value:'#fff',
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.4,
      },
      size: {
        value: { min: 1, max: 4 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 220,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 1,
          size:2,
        },
      },
    },
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleScrollToConnect = () => {
    window.location.href =
      "https://drive.google.com/file/d/1H1T-DnWj3jdeGzY0ElCF7_gHhynl3i5H/view?usp=sharing";
  };

  return (
    <section className="banner" id="home">
      
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div >
                  {/* <Particles
                    options={options}
                    init={particlesInit}
                    style={{
                      position: "relative",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: "-1",
                      filter: "blur(1.5px)" 
                    }}
                  /> */}
                  <Fade left cascade>
                    {/* <span className="tagline">Welcome to my Portfolio!</span> */}
                    <span className="welcome"
                      style={{
                        // color: "",
                        fontSize: "20px",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: "&lt;h1&gt;Welcome to my Portfolio!&lt;/h1&gt;",
                      }}
                    ></span>
                    <h1 style={{zIndex:'100 !important'}}>
                     {`Hi! I'm Vedant I'm a`}{" "}
                      <span
                        className="txt-rotate"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Hi! I am Vedant Kesharia,I am a FullStack Web Developer,
                      This is my portfolio website, I hope you like this website
                      and my projects!
                    </p>
                  </Fade>

                  <Fade left cascade>
                    <button onClick={handleScrollToConnect}>
                      My Resume <ArrowRightCircle size={25} />
                    </button>
                  </Fade>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div >
                  <Particles
                    options={options}
                    init={particlesInit}
                    style={{
                      position: "relative",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: "-100",
                      filter: "blur(2.5px)" 
                    }}
                  />
                  <img src={globe_img} alt="Header Img" />
                  {/* {isVisible && create3DScene("container3D", "earth")} */}
                  {/* {start3DRendering()} */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
