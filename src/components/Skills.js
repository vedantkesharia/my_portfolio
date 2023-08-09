import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import reactImg from "../assets/img/react_img.png";
import nextImg from "../assets/img/next_img.jpg";
import jsImg from "../assets/img/javascript_img.png";
import nodetImg from "../assets/img/node_img.png";
import expressImg from "../assets/img/express.png";
import mongodbImg from "../assets/img/mongodb_img.png";
import cssImg from "../assets/img/css_img.png";
import tailwindImg from "../assets/img/tailwind_css.png";
import htmlImg from "../assets/img/html_img.png";
import Fade from "react-reveal/Fade";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow">
              <Fade left cascade>
                <h2>Skills</h2>
                <p>
                  My Skill set includes knowledge of Frontend languages and
                  libraries like HTML, CSS, Javascript, Tailwindcss, Material
                  UI, Bootstrap, ReactJS, NextJs and Backend languages and
                  libraries NodeJS, ExpressJS, databases like Firebase, MongoDB
                  and MySQL.
                </p>
              </Fade>

              <Fade right>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  // customTransition="transform 20s linear infinite"
                  // containerClass="skill-slider-container"
                  // itemClass="skill-slider-item"
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item" style={{height:'125%',width:'125%',margin:'auto',marginLeft:'-12%',marginTop:'-5%'}}>
                    <img src={reactImg} alt="Image" />
                    <h5>ReactJs</h5>
                  </div>
                  <div className="item">
                    <img src={nextImg} alt="Image" />
                    <h5>NextJs</h5>
                  </div>
                  <div className="item">
                    <img src={nodetImg} style={{marginTop:"-2%",marginLeft:'-4%'}} alt="Image" />
                    <h5 style={{marginTop:"-9%",marginLeft:'-4%'}}>NodeJs</h5>
                  </div>
                  <div className="item">
                    <img
                      src={expressImg}
                      style={{ marginTop: "10px",height:'140%',width:'130%',margin:'auto',marginLeft:'-16%' }}
                      alt="Image"
                    />
                    <h5>ExpressJs</h5>
                  </div>
                  <div className="item">
                    <img src={mongodbImg} alt="Image" />
                    <h5>MongoDB</h5>
                  </div>
                  <div className="item">
                    <img src={jsImg} alt="Image" />
                    <h5>Javascript</h5>
                  </div>
                  <div className="item" style={{marginTop:"2%"}}>
                    <img src={cssImg} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item" style={{height:'160%',width:'140%',margin:'auto',marginLeft:'-20%'}}>
                    <img src={tailwindImg} alt="Image" />
                    <h5>TailwindCSS</h5>
                  </div>
                  <div className="item">
                    <img src={htmlImg} alt="Image" />
                    <h5>HTML</h5>
                  </div>
                </Carousel>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
