import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import BigStar from '../assets/BigStar.png'
import { useParams } from 'react-router-dom';
import { fetchOneItem } from '../http/itemAPI';

const ItemPage = () => {
  
  const [item, setItem] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
      fetchOneItem(id).then(data => setItem(data))
  }, [])


  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + item.img}/>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{item.name}</h2>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{background: `url(${BigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
              >
                {item.rating}
              </div>
            </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От: {item.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {item.info.map((info, index) => 
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default ItemPage;
