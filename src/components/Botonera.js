import {Button} from 'react-bootstrap';

function Botonera({ iniciarJuego }){
    return (
        <Button onClick={iniciarJuego}> Iniciar Juego </Button>
    );
}
export default Botonera;