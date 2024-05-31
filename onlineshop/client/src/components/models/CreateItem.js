import React, { useContext, useState } from 'react';
// {useState}
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
//import {createType} from "../../http/deviceAPI";

const CreateItem = ({show, onHide}) => {
    const {item} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    //         setValue('')
    //         onHide()
    //     })
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    //         setValue('')
    //         onHide()
    //     })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size='lg'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* <Form.Control
                        //value={value}
                        //onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    /> */}
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.types.map(type => 
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите категорию</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.categorys.map(category => 
                                <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название товара"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите стоимость товара"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i => 
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateItem;