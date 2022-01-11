import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.valorQualquer }</h4>
                <p>{ props.descricao }</p>
                <a src={ props.endereco } />
            </div>
        </div>
    )
}

export default CardPequeno;