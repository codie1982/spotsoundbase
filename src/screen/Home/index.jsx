import React from 'react'
import brand from "../../assets/images/brand.png"
import logoWhite from "../../assets/images/spotsound_white_icon.png"


import { Row,Col, Container} from 'react-bootstrap';
function Home() {
  return (
   <Container>
    <Row className="mx-auto">
      <Col md="6">
      <Row>
        <Col>
        <img src={brand} alt="brand" />
        </Col>
        </Row>
        <Row>
        <Col>
        <p className="description text-white">
          Download your music list from your computer to your mobile device and enjoy listening to it
          whenever and wherever you want. Whether online or offline, music is always with you. Join
          the music world of other users, share their tastes and follow their lists. Moreover, you
          can leave your music where you listen to it and turn every point in the city into your own
          stage. Feel the rhythm in every step, share your music in every corner. With SpotSound,
          music is not only in your ears, but also in your steps! Now, everywhere is a concert area
          for you.
        </p>
        </Col>
        </Row>
        </Col>
      <Col md="6"> 
      <div className="flex items-center"><img src={logoWhite} alt="Logo" /></div>
      </Col>
    </Row>

    <Row>
      <Col>
      <Row>
        <Col>
        <div className='flex items-center mx-auto'>
          <p>Upload Your Music List</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='w-[200px] h-[200px] rounded-full mx-auto border-1 border-white'>
            <img src={logoWhite} alt="Logo" />
          </div>
        </Col>
      </Row>
      </Col>
      <Col>
      <Row>
        <Col>
        <div className='flex items-center mx-auto'>
          <p>Upload Your Music List</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='w-[200px] h-[200px] rounded-full mx-auto border-1 border-white'>
            <img src={logoWhite} alt="Logo" />
          </div>
        </Col>
      </Row>
      </Col>


      <Col>
      <Row>
        <Col>
        <div className='flex items-center mx-auto'>
          <p>Upload Your Music List</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='w-[200px] h-[200px] rounded-full mx-auto border-1 border-white'>
            <img src={logoWhite} alt="Logo" />
          </div>
        </Col>
      </Row>
      </Col>

    </Row>
   </Container>
  )
}
export default Home