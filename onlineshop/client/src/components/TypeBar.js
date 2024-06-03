import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/typebar.css';


const TypeBar = observer(() => {
    const { item } = useContext(Context);
    return (
        <ListGroup style={{ borderRadius: '20px'}}>
            {item.types.map(type =>
                <ListGroup.Item
                    style={{
                        cursor: 'pointer',
                        backgroundColor: '#FFE7E7',
                        color: 'black',
                        border: type.id === item.selectedType.id ? '2px solid black' : 'none' // Черная обводка при активации
                    }}
                    active={type.id === item.selectedType.id}
                    onClick={() => item.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
