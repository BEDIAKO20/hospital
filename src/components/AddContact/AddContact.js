import React from 'react'
import { Col, Container,Row,Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AddContact() {
  return (
   <React.Fragment>
    <section className='add-contact p-3'>
      <Container>
        <Row>
          <Col>
          <p className="h4 text-success fw-bold">Create Contact</p>
          <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu.</p>
          </Col>
          <Row>
            <Col md={4}> 
            <Form>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPhoto Url">
       
        <Form.Control type="text" placeholder="Photo Url" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicMobile">
      
        <Form.Control type="number" placeholder="Mobile" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCompany">
  
        <Form.Control type="text" placeholder="Company Name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicSelect">
       
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicSelect">
       
        <Form.Select aria-label="Default select example" className='from-control'>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Form.Group>
      
      <Button variant="success" type="submit" className="me-3" value="Create">
        Create
      </Button>{''}
      <Button  variant="danger" type="submit" as={Link} to={"/contacts/list"}>
        Cancel
      </Button>
    </Form>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
   </React.Fragment>
  )
}

export default AddContact