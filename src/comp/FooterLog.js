import React from 'react';
import { Link } from 'react-router-dom';

function FooterLog() {
    return (
        <footer>
            <Link to="/" className="link" > Criar Conta </Link>    
            <Link to="/" className="link" > Recuperar Senha </Link>                    
        </footer>
    );
};

export default FooterLog;
