import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import { useNavigate } from "react-router-dom"
import { ITEM_ROUTE } from "../utils/consts";

const ItemItem = ({ item }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}>
            <Card style={{ width: 222, cursor: 'pointer', }} border={"light"}>
                <div style={{ width: '100%', height: 222, overflow: 'hidden' }}>
                    <Image
                        src={process.env.REACT_APP_API_URL + item.img}
                        alt={item.name}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{item.rating}</div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
                <div>{item.name}</div>
            </Card>
        </Col>
    );
};

export default ItemItem;
