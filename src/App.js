import React from 'react';
import Form from './FormLog/Form';
import Header from './Header';

const App = () => {
  return (
    <>
      <Header/>
      <Form campo1="E-mail" campo2="Senha"/>
    </>
  );
};

export default App;
