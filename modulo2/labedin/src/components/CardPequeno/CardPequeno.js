import React from 'react';
import styled from 'styled-components';

const Caixa = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    &:hover {
        background-color:gray
    }
    &:active {
        background-color:blueviolet
    }
    img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }

    h4 {
    margin-bottom: 15px;
    }

    div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    }
`

function CardPequeno(props) {
    return (
        <Caixa className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.valorQualquer }</h4>
                <p>{ props.descricao }</p>
                <a src={ props.endereco } />
            </div>
        </Caixa>
    )
}

export default CardPequeno;