import React, {useContext, useState} from 'react';
import { Container, Form } from 'react-bootstrap';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/consts';
import { login, registration } from '../http/userAPI';
import {observer} from "mobx-react-lite";
import { Context } from '..';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async() => {
    try {
      let data;
      if (isLogin) {
        //const response = await login()
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 424}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto"> {isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control 
            className="mt-3"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? 
            <div>
              Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегайся!</NavLink>
            </div>
            :
            <div>
              Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div>
            }
            <Button 
              className='mt-3 align-self-end'
              variant="outline-success"
              onClick={click}
              style={{
                fontFamily: 'Inter, sans-serif', // Применяем шрифт
                borderRadius: '20px', // Скругление углов
                width: '100%', // По размеру совпадает с полями ввода
                backgroundColor: '#FFE7E7', // Розовый цвет
                borderColor: 'black', // Цвет рамки
                color: 'black', // Цвет текста
                marginTop: '1rem' // Отступ сверху
              }}
                >
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
