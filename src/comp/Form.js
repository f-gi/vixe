import React from 'react';
import Button from './Button';

const Form = (props) => {
    const [tipo, seType] = React.useState(true); 
    return (
        <form>
            <p>
                <label htmlFor="email" className="labelInfo" > {props.campo1} </label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="senha" className="labelInfo"> {props.campo2} </label>
                <label onClick={ () => {seType(!tipo)}} className="labelExibir" > {tipo ? 'Mostrar' : 'Ocultar'} </label>
                <input type={tipo ? 'password' : 'text'} />
            </p>
            <Button />
        </form>
    );
};

export default Form;


      