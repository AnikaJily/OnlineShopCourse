import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import CategoryBar from '../components/CategoryBar';
import ItemList from '../components/ItemList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchCategorys, fetchItems, fetchTypes } from '../http/itemAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const {item} = useContext(Context)


    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchCategorys().then(data => item.setCategorys(data))
        fetchItems(null, null, 1, 5).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchItems(item.selectedType.id, item.selectedCategory.id, item.page, 5).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item.page, item.selectedType, item.selectedCategory,])



    return (
        <Container>
                <Row className="mt-2">
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <CategoryBar/>
                        <ItemList/>
                        <Pages/>
                    </Col>
                </Row>
            </Container>
    );
});

export default Shop;
