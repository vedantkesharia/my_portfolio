import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
// import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

// className={isVisible ? "animate__animated animate__fadeIn" : ""} line 70
// className={isVisible ? "animate__animated animate__zoomIn" : ""} line 90
//dataPeriod="1000" line 74

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Frontend Developer", "Backend Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleScrollToConnect = () => {
    window.location.href="https://drive.google.com/file/d/1FDrSn8rJuWzho3f5bYBosAKO0raMO_cg/view?usp=drivesdk";
  };


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <Fade left cascade>
                <span className="tagline">Welcome to my Portfolio!</span>
                <h1>{`Hi! I'm Vedant`} <span className="txt-rotate" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Hi! I am Vedant Kesharia,I am a FullStack Web Developer, This is my portfolio website, I hope you like this website and my projects!
                  </p>
                  </Fade>

                  <Fade left cascade>
                  <button onClick={handleScrollToConnect}>My Resume <ArrowRightCircle size={25} />
                  </button>
                  </Fade>
                
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div >
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}