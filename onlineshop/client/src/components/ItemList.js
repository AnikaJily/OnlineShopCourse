import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import ItemItem from "./ItemItem";

const ItemList = observer(() => {
    const { item } = useContext(Context)

    return (
        <Row className="d-flex" style={{ gap: 0 }}>
            {item.items.map(item =>
                <ItemItem key={item.id} item={item}/>
            )}
        </Row>
    );
});

export default ItemList;