import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = (props) => {
    return (
        <form>
            <p>
                <label htmlFor="email"> {props.campo1} </label>
                <Input />
            </p>
            <p>
                <label htmlFor="senha"> {props.campo2} </label>
                <label> Mostrar </label>
                <Input />
            </p>
            <Button />
        </form>
    );
};

export default Form;
