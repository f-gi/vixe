import React from 'react';
import Header from './Header';
import Destaque from './Destaques';
import Produtos from './Produtos';

function Home() {
    return (
        <>
            <Header/>
            <div className="wrap">
                <Destaque/>
                <Produtos/>                
            </div>
        </>
    );
};

export default Home;
