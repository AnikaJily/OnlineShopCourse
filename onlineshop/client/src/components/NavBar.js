import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
//import UserStore from '../store/UserStore';



const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavLink style={{color:'black'}} to={SHOP_ROUTE}>ARNYPRAHT</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{color: 'black'}}>
            <Button variant={"outline-dark"}>Админ Панель</Button>
            <Button variant={"outline-dark"} className="ms-3">Войти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: 'black'}}>
                <Button variant={"outline-dark"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
        }
        </Container>
      </Navbar>
    );
});

export default NavBar;
