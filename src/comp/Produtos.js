import React from 'react';
import Acqua from '../img/acqua.png';
import Institucional from '../img/institucional.png';
import Noticia from '../img/noticia.png';
import Promo from '../img/promo.png';
import Smartconnection from '../img/smartconnection.png';
import Venda from '../img/venda.png';


const Produtos = () => {
    return (
        <>
            <p className="titulo" > Produtos </p>
            <div className="grid" >
                <div>
                    <img src={Acqua} alt="Acqua" className="" />
                    <p className="legenda">Acqua</p>
                </div>
                <div>
                    <img src={Smartconnection} alt="Smartconnection" />
                    <p className="legenda"> Smart Connection</p>
                </div>
                <div>
                    <img src={Institucional} alt="Institucional" className="" />
                    <p className="legenda">Institucional</p>
                </div>
                <div>
                    <img src={Venda} alt="Venda" className="" />
                    <p className="legenda">Venda</p>
                </div>
                <div>
                    <img src={Noticia} alt="Noticia" className="" />
                    <p className="legenda">Notícia</p>
                </div>
                <div>
                    <img src={Promo} alt="Promoção" className="" />
                    <p className="legenda">Promoção</p>
                </div>
            </div>
        </>
    );
};

export default Produtos;
