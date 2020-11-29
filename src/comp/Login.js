import React from 'react';
import FooterLog from './FooterLog';
import Form from './Form';
import vexiPreto from '../img/vexiPreto.png';

const Login = () => {
  return (
    <>
      <img src={vexiPreto} alt="Vexi" className="vexiP" />
      <Form campo1="E-mail" campo2="Senha"/>
      <FooterLog/>
    </>
  );
};

export default Login;
