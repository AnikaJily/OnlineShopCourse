import React, { useContext, useEffect, useState } from 'react';
// {useState}
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import { createItem, fetchCategorys, fetchTypes } from '../../http/itemAPI';
import { observer } from 'mobx-react-lite';
//import {createType} from "../../http/deviceAPI";

const CreateItem = observer(({show, onHide}) => {
    const {item} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchCategorys().then(data => item.setCategorys(data))
        // fetchDevices(null, null, 1, 2).then(data => {
        //     device.setDevices(data.rows)
        //     device.setTotalCount(data.count)
        // })
    }, [])


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

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('categoryId', item.selectedCategory.id)
        formData.append('typeId', item.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createItem(formData).then(data => onHide())
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
                    <Dropdown.Toggle style={{ backgroundColor: '#FFE7E7', borderColor: '#FFE7E7', color: 'black' }}>
                        {item.selectedType.name || "Выберите тип"}
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.types.map(type => 
                                <Dropdown.Item 
                                    onClick={() => item.setSelectedType(type)} 
                                    key={type.id
                                }>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle style={{ backgroundColor: '#FFE7E7', borderColor: '#FFE7E7', color: 'black' }}>
    {item.selectedCategory.name || "Выберите категорию"}
</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.categorys.map(category => 
                                <Dropdown.Item 
                                    onClick={() => item.setSelectedCategory(category)}
                                    key={category.id}
                                >
                                    {category.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название товара"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость товара"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
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
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
            <Button
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '15px'
                }}
                variant="outline-danger"
                onClick={onHide}
            >
                Закрыть
            </Button>
                <Button
                    style={{
                        backgroundColor: '#FFE7E7',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '15px'
                    }}
                    variant="outline-success"
                    onClick={addItem}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateItem;