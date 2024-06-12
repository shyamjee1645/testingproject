import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3"> {/* Reduced padding */}
      <Container>
        <Row>
          <Col md={4} sm={6}> {/* Adjusted column sizes */}
            <h5>About FindYourHome</h5> {/* Used h5 instead of h4 */}
            <p>
              FindYourHome is a leading platform for buying and selling homes. We
              connect buyers and sellers, providing a seamless and efficient
              experience.
            </p>
          </Col>
          <Col md={4} sm={6}> {/* Adjusted column sizes */}
            <h5>Quick Links</h5> {/* Used h5 instead of h4 */}
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Find a Home</a></li>
              <li><a href="#" className="text-light">Sell Your Home</a></li>
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12}> {/* Adjusted column sizes */}
            <h5>Contact Us</h5> {/* Used h5 instead of h4 */}
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
