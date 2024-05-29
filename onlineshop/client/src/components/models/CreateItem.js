import React, { useContext } from 'react';
// {useState}
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
//import {createType} from "../../http/deviceAPI";

const CreateItem = ({show, onHide}) => {
    const {item} = useContext(Context)
    // const [value, setValue] = useState('')

    // const addType = () => {
    //     createType({name: value}).then(data => {
    //         setValue('')
    //         onHide()
    //     })
    // }

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