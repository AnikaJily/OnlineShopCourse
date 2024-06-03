import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import styles from "./css/styles.module.css";
import {useNavigate} from "react-router-dom"
import {ADMIN_ROUTE} from "../utils/consts";
import {LOGIN_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
  }

    const buttonStyle = {
        borderRadius: '15px', // Скругление углов
    };

    const navbarStyle = {
      marginBottom: '20px', // Увеличение отступа снизу
  };

    return (
      <Navbar className={styles.navbar} style={navbarStyle}>
        <Container className={styles.container}>
          <NavLink className={styles.arnypraht} to={SHOP_ROUTE}>MIXSHOP</NavLink>
          <Nav className={styles.nav}>
            {user.isAuth ?
              <>
                <Button 
                  variant="outline-dark"
                  style={buttonStyle} // Применяем стиль к кнопке
                  onClick={() => navigate(ADMIN_ROUTE)}
                >
                  Админ Панель
                </Button>
                <Button 
                  variant="outline-dark" className="ms-3"
                  style={buttonStyle} // Применяем стиль к кнопке
                  onClick={() => logOut()}
                >
                  Выйти
                </Button>
              </>
              :
              <Button 
                variant="outline-dark" 
                style={buttonStyle} // Применяем стиль к кнопке
                onClick={() => navigate(LOGIN_ROUTE)}
              >
                Авторизация
              </Button>
            }
          </Nav>
        </Container>
      </Navbar>
    );
});

export default NavBar;
