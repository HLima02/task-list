import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Form} from  './styles';
import {MdEmail} from 'react-icons/md'
import './style.css';

import logo from '../../assets/task-logo.webp';

export default function Login() {
  return (
    <Container className="content-login">
      <div className="main-login">
        <img src={logo} />
        <Form>
          <input type="text" placeholder='Email' /><br/><br/>
          <input type="password" placeholder="Senha" /><br/>
          <button type="submit">Entrar</button>
        </Form>
        <Link to="/sign-up">Ainda não tenho conta</Link>
      </div>
    </Container>
  )
}
