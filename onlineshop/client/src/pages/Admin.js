import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/models/CreateType';
import CreateCategory from '../components/models/CreateCategory';
import CreateItem from '../components/models/CreateItem';

const Admin = () => {
  const [categoryVisible, setCategoryVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [itemVisible, setItemVisible] = useState(false)
  return (
    <Container className='d-flex flex-column'>
      <Button 
        variant={"outline-dark"} 
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button 
        variant={"outline-dark"} 
        className="mt-4 p-2"
        onClick={() => setCategoryVisible(true)}
      >
        Добавить категорию
      </Button>
      <Button 
        variant={"outline-dark"} 
        className="mt-4 p-2"
        onClick={() => setItemVisible(true)}
      >
        Добавить товар
      </Button>
      <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
      <CreateType show={typeVisible } onHide={() => setTypeVisible(false)}/>
      <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
    </Container>
  );
};

export default Admin;
