import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import vk from '../assets/img/vk.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center " id="foot">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={vk} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vedant-kesharia-556603235"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/vedantkesharia"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Porfolio Website of Vedant Kesharia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
