import React from 'react';
import styled from 'styled-components';

/*]
[outro arquivo]export const Caixa = styled.div` Se eu fosse exportar de outro para esse*/ 

const Caixa = styled.div`

    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    &:hover {
        background-color: gray;
    }
    &:active {
        background-color:blueviolet
    }
    img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }

    div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    }

    h4 {
    margin-bottom: 15px;
    }

`;

function CardGrande(props) {

    return (
        <Caixa className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.valorQualquer }</h4>
                <p>{ props.descricao }</p>
            </div>
        </Caixa>
    )
}

export default CardGrande;