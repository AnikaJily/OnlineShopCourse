import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import {Card} from "react-bootstrap";

const CategoryBar = observer(() => {
const {item} = useContext(Context)
  return (
    <Row className="d-flex">
            {item.categorys.map(category =>
                <Card
                    style={{cursor:'pointer'}}
                    key={category.id}
                    className="p-3"
                    onClick={() => item.setSelectedCategory(category)}
                    border={category.id === item.selectedCategory.id ? 'green' : 'light'}
                >
                    {category.name}
                </Card>
            )}
    </Row>
  );
});

export default CategoryBar;
