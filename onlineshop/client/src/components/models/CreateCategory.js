import React, { useState } from 'react';
// {useState}
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import { createCategory } from '../../http/itemAPI';
//import {createType} from "../../http/deviceAPI";

const CreateCategory = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addCategory = () => {
        createCategory({name: value}).then(data => {
            setValue('')
            onHide()
        })
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
                    Добавить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button                 style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '15px'
                }} variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button style={{
                        backgroundColor: '#FFE7E7',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '15px'
                    }} variant="outline-success" onClick={addCategory}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;