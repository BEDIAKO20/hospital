import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row,Form,Card } from 'react-bootstrap'
import {  Link } from 'react-router-dom'
import {AiFillPlusCircle,AiTwotoneEdit,AiFillDelete } from "react-icons/ai";
import {FaRegEye} from "react-icons/fa"
 import './Contactlist.css';
import ContactService from '../../services/ContactService';

function ContactList() {

  let [state, setState]= useState({
    loading : false,
    contacts: [],
    errorMessage: ''
  });


  
  useEffect( async () => {
    try{
      setState({...state, loading: true})
       let response = await ContactService.getAllContacts();

       setState({
        ...state,
        loading: false,
        contacts: response.data
       });


      console.log(response.data)
    }
    catch(error){
      setState({
        ...state,
        loading:false,
        errorMessage:error.message

      });
    }
  }, [state]);



  let {loading,contacts,errorMessage} = state;
  return (
    <React.Fragment>
      <pre>{JSON.stringify(contacts)}</pre>
      <section className='contact-searh p-3'>
        <Container>
          <Row>
            <Col   >
            <p className='h3 fw-bold'>Hospital Management
           <Button as={Link} to={'/contacts/add'} variant="success"  className="ms-3" > <AiFillPlusCircle className='me-2'/>New</Button>
            </p>
            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <Form>
              <Row>
              <Col md={6}>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Control type="text" placeholder="Search Name" 
          name="text"
          value={query.text}
        />
      </Form.Group>
      </Col>
      <Col md={6}>
      <Button  type="submit" className='btn btn-outline-warning'  value="Search">
        Submit
      </Button>
      </Col>
      </Row>
    </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='Contact-List'>
        <Container>
          <Row>
            <Col md={6}>
            <Card >
      <Card.Body>
       <Row className='align-items-center d-flex justify-content-around'>
       <Col md={4}>
          <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-1024.png" 
           alt='Userpic' className='img-fluid contact-img ' />
        </Col>
        <Col md={7}>
          <ul className='list-group'>
            <li className='list-group-item list-group-item-action'>
              Name :<span className='fw-bold' >Kofi Boadi</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              Mobile :<span className='fw-bold' >05522288681</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              Email :<span className='fw-bold' >boadikofi446@gmail.com</span>
            </li>
          </ul>
        </Col>
        <Col md={1} className="d-flex flex-column align-items-center">
          <Button as={Link} to={"/contacts/view/:contactId"} variant="warning" className='my-1' ><FaRegEye/></Button>
          <Button as={Link} to={"/contacts/edit/:contactedit"} variant="success"  className='my-1'><AiTwotoneEdit/></Button>
          <Button  variant="danger"  className='my-1'><AiFillDelete/></Button>
        </Col>
       </Row>
  
      </Card.Body>
    </Card>
            </Col>

            <Col md={6}>
            <Card >
      <Card.Body>
       <Row className='align-items-center d-flex justify-content-around'>
       <Col md={4}>
          <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-1024.png" 
           alt='Userpic' className='img-fluid contact-img ' />
        </Col>
        <Col md={7}>
          <ul className='list-group'>
            <li className='list-group-item list-group-item-action'>
              Name :<span className='fw-bold' >Kofi Boadi</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              Mobile :<span className='fw-bold' >05522288681</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              Email :<span className='fw-bold' >boadikofi446@gmail.com</span>
            </li>
          </ul>
        </Col>
        <Col md={1} className="d-flex flex-column align-items-center">
          <Button as={Link} to={"/contacts/view/:contactId"} variant="warning" className='my-1' ><FaRegEye/></Button>
          <Button as={Link} to={"/contacts/edit/:contactedit"} variant="success"  className='my-1'><AiTwotoneEdit/></Button>
          <Button  variant="danger"  className='my-1'><AiFillDelete/></Button>
        </Col>
       </Row>
  
      </Card.Body>
    </Card>
            </Col>

          </Row>
          
        </Container>

      </section>




    </React.Fragment>
  )
}

export default ContactList