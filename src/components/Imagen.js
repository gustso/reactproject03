import { Figure }  from 'react-bootstrap';

function Imagen({fallos}) {
    //console.log(fallos);
    const direccionImagen = "img/img-0"+ fallos+".png";

    return (
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"           
                src={direccionImagen}
            />
            <Figure.Caption>
                PALABRA
            </Figure.Caption>

        </Figure>
    );
};

export default Imagen;
