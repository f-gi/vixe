import React from 'react';
import destaque from '../img/destaque.png';

function Destaques() {
    return (
        <>
            <p className="titulo" >Destaques</p>
            <img src={destaque} alt="destaque" className="centro" />
        </>
    );
};

export default Destaques;
