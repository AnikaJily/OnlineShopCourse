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

const Shop = observer(() => {
    const {item} = useContext(Context)



    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchCategorys().then(data => item.setCategorys(data))
        fetchItems().then(data => item.setItems(data.rows))
    }, [])

    // useEffect(() => {
    //     fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
    //         device.setDevices(data.rows)
    //         device.setTotalCount(data.count)
    //     })
    // }, [device.page, device.selectedType, device.selectedBrand,])


    return (
        <Container>
                <Row className="mt-2">
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <CategoryBar/>
                        <ItemList/>
                    </Col>
                </Row>
            </Container>
    );
});

export default Shop;
