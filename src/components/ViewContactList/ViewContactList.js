import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"

function ViewContactList() {
  return (
    <div>
      <React.Fragment>
        <section className='view-contact-intor p-3'>
          <Container>
            <Row>
              <Col>
              <p className=' h3 text-warning fw-bold'>View Contact</p>
              <p className='fst-italic '>Lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='view-contact mt-3'>
          <Container>
            <Row className='align-items-center'>
              <Col md={4}>
                <img src='https://cdn-icons-png.flaticon.com/512/219/219988.png' 
                 alt='Userpic' className='img-fluid contact-img '/>
              </Col>
              <Col md={8}> 
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
            <li className='list-group-item list-group-item-action'>
              Company :<span className='fw-bold' >China Natural Herbal Hospital Ltd</span>
            </li>
            <li className='list-group-item list-group-item-action'>
              Title :<span className='fw-bold' >Youtuber</span>
            </li>
            <li className='list-group-item list-group-item-action'>
                Group :<span className='fw-bold' >Acupuncture</span>
            </li>
            </ul>
              </Col>
            </Row>

            <Row>
              <Col>
              <Button as={Link} to={'/contacts/list'}  variant="info" className='fw-bold'>
                 <span className='me-2'><BiArrowBack/></span> Back</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    </div>
  )
}

export default ViewContactList