import { useState } from 'react';
import './Polaroid.css'; // Archivo CSS para los estilos

const Polaroid = () => {
    const fotos = [
        { src: './public/f1.jpg', descripcion: 'Momento cute juntas' },
        { src: './public/f2.jpg', descripcion: 'Pinto ser unas chicas agresivas' },
        { src: './public/f3.jpg', descripcion: 'Rockstars siempre' },
        { src: './public/f4.jpg', descripcion: 'Momento pato' },
        { src: './public/f5.jpg', descripcion: 'Deportistas claro que si' },
        { src: './public/f6.jpg', descripcion: 'Mucho amor por acá' },
        { src: './public/f7.jpg', descripcion: 'Are you lost baby girl?' },
        { src: './public/f8.jpg', descripcion: 'Random claro que si como de que no, siempre siguiendo cosas que vemos por tik tok' },
        { src: './public/f9.jpg', descripcion: 'fotito random en 2022' },
        { src: './public/f10.jpg', descripcion: 'Correcta en todo momento, por?' },
        { src: './public/f11.jpg', descripcion: 'Claramente te gané' },
        { src: './public/f12.jpg', descripcion: 'Siempre cariñosa' },
        { src: './public/f13.jpg', descripcion: 'Juntas en cada momento' },
        { src: './public/f14.jpg', descripcion: 'Extrañando los días de taller con vos' },
        { src: './public/f15.jpg', descripcion: 'Fuerte por que un tropezon no es caída' },
        { src: './public/f16.jpg', descripcion: 'Almuerzos en el recuerdo' },
        { src: './public/f17.jpg', descripcion: 'ALERTA +16' },
        { src: './public/f18.jpg', descripcion: 'Tirando hermosura' },
        { src: './public/f19.jpg', descripcion: 'Ups, se filtro!' }
        
    ];

    const [indiceFoto, setIndiceFoto] = useState(0);

    const siguienteFoto = () => {
        setIndiceFoto((prevIndex) => (prevIndex + 1) % fotos.length);
    };

    const anteriorFoto = () => {
        setIndiceFoto((prevIndex) => (prevIndex - 1 + fotos.length) % fotos.length);
    };

    return (
        <div className="polaroid-container">
            <div className="polaroid">
                <img src={fotos[indiceFoto].src} alt="Foto con amigos" className="polaroid-image" />
                <div className="polaroid-description">
                    {fotos[indiceFoto].descripcion}
                </div>
            </div>
            <div className="navigation-buttons">
                <button onClick={anteriorFoto} className="nav-button">Anterior</button>
                <button onClick={siguienteFoto} className="nav-button">Siguiente</button>
            </div>
        </div>
    );
};

export default Polaroid;
