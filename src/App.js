import React from 'react';
import { Container } from "react-bootstrap";
import Imagen from "./components/Imagen";
import { useState } from "react";
import Botonera from './components/Botonera';
import Boton from './components/Boton';
import Palabra from './components/Palabra';

function App() {

    //const gustavo;
    //let gustavo01;
    //var gustavo02;

    const abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];

    const palabras = ["ANUAL", "BURRO", "COLEGIO", "DIENTES", "ELEFANTE", "FUEGO", "GOL", "HUMANO", "IMAN", "JUEGO", "KIOSCO", "LUNES", "MARTES"];

    const [numFallos, setNumFallos] = useState(0);

    const [palabraAdivinada, setPalabraAdivinada] = useState("_ _ _ _ _ _ _ _ _");

    const manejarClick = (letra) => {
        let letraAcertada = false;
        for (let i=0; i < palabraAdivinada.length; i++){
            if (letra == palabraAdivinada[i]) {
                letraAcertada = true;
            }
        }
        if (letraAcertada) {

        } else {
            setNumFallos(numFallos + 1);
            if (numFallos == 6) {
                setNumFallos(0)
            };
            console.log(numFallos);
        }

    };

    const iniciarJuego = () => {
        let numAleatorio = Math.floor(Math.random() * palabras.length);
        setPalabraAdivinada(palabras[numAleatorio]);
    };

    return (
        <Container>
            <Imagen fallos={numFallos} />
            <Palabra palabraAdivinada={palabraAdivinada} />
            <Botonera iniciarJuego={iniciarJuego} />
            {abecedario.map((letra, i) =>
                <Boton
                    manejarClick={() => manejarClick(letra)}
                    key={i}
                    texto={letra} />)}
        </Container>
    );
}

export default App;