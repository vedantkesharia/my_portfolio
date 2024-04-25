import { useState, useEffect,Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Cube";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import headerImg3 from "../assets/img/header5_img.png";
import globe_img from "../assets/img/globe_img.png";
import robot_img from "../assets/img/robot-removebg.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
// import Reveal from 'react-reveal/Reveal';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {Fade} from "react-awesome-reveal";
import { Particle } from "./Particle";
import Cube from "./Cube";
import EarthCanvas from "./Earth";
import Snowfall from "react-snowfall";

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

  // const options = {
  //   particles: {
  //     number: {
  //       value: 48,
  //       density: {
  //         snable:false
  //         // enable: true,
  //         // area: 800,
  //       },
  //     },
  //     color: {
  //       // value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
  //       value: "fff",
  //     },
  //     shape: {
  //       type: "star",
  //     },
  //     // opacity: {
  //     //   value: 0.9,
  //     // },
  //     opacity: {
  //       value: 0.9,
  //       random: true, // Enable random opacity for twinkling effect
  //       anim: {
  //         enable: true,
  //         speed: 1,
  //         opacity_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     size: {
  //       value: { min: 0.8, max: 2.5 },
  //     },
  //     blur: {
  //       value: 0, // Set blur value to 0 to make the stars sharp
  //     },
  //     links: {
  //       enable: false,
  //       distance: 125,
  //       // color:'808080',
  //       color: "#fff",
  //       opacity: 0.7,
  //       width: 1,
  //     },
  //     move: {
  //       enable: false,
  //       speed: 1.2,
  //       direction: "random",
  //       random: false,
  //       straight: false,
  //       outModes: "out",
  //     },
  //   },
  //   interactivity: {
  //     events: {
  //       onHover: {
  //         enable: false,
  //         mode: "grab",
  //       },
  //       onClick: {
  //         enable: true,
  //         mode: "push",
  //       },
  //     },
  //     modes: {
  //       grab: {
  //         distance: 180,
  //         links: {
  //           opacity: 1,
  //         },
  //       },
  //       push: {
  //         quantity: 1,
  //         size: 1.5,
  //       },
  //     },
  //   },
  // };

  const options = {
    particles: {
      number: {
        // value: 48,
        value: 60,
        density: {
          snable: false,
          // enable: true,
          // area: 800,
        },
      },
      color: {
        // value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
        value: "fff",
      },
      shape: {
        type: "circle",
      },
      // opacity: {
      //   value: 0.9,
      // },
      opacity: {
        value: 0.9,
        random: true, // Enable random opacity for twinkling effect
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.8, max: 2.5 },
      },
      blur: {
        value: 0,
      },
      links: {
        enable: false,
        distance: 125,
        // color:'808080',
        color: "#fff",
        opacity: 0.7,
        width: 1,
      },
      move: {
        enable: false,
        speed: 0.8,
        direction: "random",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        onClick: {
          enable: false,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 500,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 5,
        },
        push: {
          quantity: 1,
          size: 1.5,
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
      "https://drive.google.com/file/d/1V-jt7-Q_7hFpih4XjCwYdrDMFB5TpAcf/view?usp=sharing";
  };

  return (
    <section className="banner" id="home">
      <Container>
        {/* <Snowfall/> */}
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
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
                  {/* <Fade left cascade duration={600}> */}
                  <Fade delay={120} cascade damping={0.5}>
                    {/* <span className="tagline">Welcome to my Portfolio!</span> */}
                    <span
                      className="welcome"
                      style={{
                        // color: "",
                        fontSize: "20px",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: "&lt;h1&gt;Welcome to my Portfolio!&lt;/h1&gt;",
                      }}
                    ></span>

                    <h1 style={{ zIndex: "100 !important" }}>
                      {`Hi! I'm Vedant I'm a`}{" "}
                      <span
                        className="txt-rotate"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                       
                      </span>
                    </h1>
                      {/* <span className="blur"></span>
                    <span className="blur"></span> */}
                    <p style={{ fontWeight: "bolder", fontStyle: "italic",boxShadow:'2px' }}>
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
                <div>
                  <Particles
                    options={options}
                    init={particlesInit}
                    style={{
                      position: "relative",
                      position: "relative",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: "-100",
                      // filter: "blur(2.5px)"
                    }}
                  />
                  {/* <img src={robot_img} alt="Header Img" className="robot"/> */}
                  {/* {isVisible && create3DScene("container3D", "earth")} */}
                  {/* {start3DRendering()} */}
                  {/* <Canvas camera={{ position: [0, 0, 10] }} style={{ width: "530px", height: "580px" }} className="three_model">
                    <Suspense fallback={null}>
                      <Cube />
                      <OrbitControls enableZoom={false} autoRotate />
                    </Suspense>
                  </Canvas> */}

                  <EarthCanvas className="three_model"/>
              
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
