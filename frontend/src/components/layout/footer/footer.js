import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4"> {/* Decreased py-5 to py-4 */}
      <Container>
        <Row>
          <Col md={6}>
            <h5>About FindYourHome</h5> {/* Changed h4 to h5 */}
            <p>
              FindYourHome is a leading platform for buying and selling homes. We
              connect buyers and sellers, providing a seamless and efficient
              experience.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5> {/* Changed h4 to h5 */}
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Find a Home</a></li>
              <li><a href="#" className="text-light">Sell Your Home</a></li>
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5> {/* Changed h4 to h5 */}
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>Anytown, USA</li>
              <li>Phone: 555-555-5555</li>
              <li>Email: info@findyourhome.com</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0">
          &copy; 2023 FindYourHome. All rights reserved. | Designed by Shyam Jee
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
