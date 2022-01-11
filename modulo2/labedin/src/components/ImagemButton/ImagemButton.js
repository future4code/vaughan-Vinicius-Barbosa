import React from 'react';
import styled from 'styled-components';

const Caixa = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    &:hover {
        background-color:gray
    }
    &:active {
        background-color:blueviolet
    }
    img {
    width: 30px;
    margin-right: 10px;
    }

`

function ImagemButton(props) {
    return (
        <Caixa className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Caixa>

    )
}

export default ImagemButton;

