import React from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import CategoryBar from '../components/CategoryBar';
import ItemList from '../components/ItemList';

const Shop = () => {
  return (
    <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <CategoryBar/>
                    <ItemList/>
                    {/* <Pages/> */}
                </Col>
            </Row>
        </Container>
  );
};

export default Shop;
