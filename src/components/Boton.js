import {Button} from 'react-bootstrap';

function Boton({ manejarClick, texto }){
    return (
        <Button onClick={manejarClick}> { texto } </Button>
    );
}
export default Boton;