import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './comp/Login';
import Home from './comp/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login/>} />
        <Route path="home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
