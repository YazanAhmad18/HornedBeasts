import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

class Footer extends React.Component {

  render() {
    return (

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yazan ahmad</Navbar.Brand>
        </Container>
      </Navbar>

    );
  }
}
export default Footer;
