import React from 'react';
// {useState}
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
//import {createType} from "../../http/deviceAPI";

const CreateCategory = ({show, onHide}) => {
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
                    Добавить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        //value={value}
                        //onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;