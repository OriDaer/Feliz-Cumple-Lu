import { useState } from 'react';
import './App.css'; // Estilos globales
import Polaroid from './Polaroid.jsx'; // Importamos el componente Polaroid

const App = () => {
  const [pestana, setPestana] = useState(1); // Estado para manejar las pestañas

  const irAPestana1 = () => setPestana(1);
  const irAPestana2 = () => setPestana(2);

  return (
    <div className="app-container">
      <div className="tabs">
        <button onClick={irAPestana1} className={pestana === 1 ? 'active' : ''}>
          Carta de Cumple
        </button>
        <button onClick={irAPestana2} className={pestana === 2 ? 'active' : ''}>
          Fotos Juntas
        </button>
      </div>

      {pestana === 1 ? (
        <div className="carta-container">
          <h1 className="titulo-carta">¡Muy Feliz Cumpleaños terrón de azúcar!</h1>
          <p className="mensaje-carta">
            Espero que todas aquellas metas por cumplir y sueños por alcanzar, este año logres estar más cerca de ellos. Sinceramente, cada día que compartimos juntas me hace sentir muy bien y, en días como este, pensar en el primer día que nos conocimos, cuando lo primero que pensé al verte fue que no sabía qué decirte cuando nos presentaron, me genera mucha gracia. Saber lo mucho que hemos pasado desde ese día me hace estar realmente agradecida de haber coincidido con vos y de compartir momentos hermosos juntas, como reírnos, hablar boludeces, cantar, bailar, inventar cosas, abrazarte y molestarte con ser cariñosa, aunque a veces no quieras.
            Toda la vida te voy a agradecer por sacarme una sonrisa cuando todo se me derrumba y por hacerme pensar en otras cosas para calmarme. Cuando estamos juntas, es como si no importara nada más que lo que está pasando y lo que estamos haciendo. Sé que en general no te lo hago saber mucho, pero realmente sos muy importante y valés mucho.
            Tenés un montón de cosas bellas para ofrecer, y es de resaltar lo genuina que sos (y sincera mucho más). Ver cómo te brillan los ojos y cómo te exaltás cada vez que pasa algo que te gusta es una de las cosas más lindas que vivimos juntas. Poder compartir actividades que nos gusta hacer y el poder compartirlas con vos es lo mejor que me pudo suceder.
            Nunca olvides que voy a estar para apoyarte, compartir, hablar, darte un consejo, visitar lugares, descubrir cosas, darte un abrazo, desahogarte si es necesario y absolutamente todo lo que vos quieras hacer o decirme. Siempre voy a estar, sin importar qué tanto se compliquen las cosas. Siempre hay luz después del túnel o siempre sale el sol, como dirían por ahí.
            Nunca dudes de todo lo que podés lograr, el único límite te lo ponés vos. No importa qué tan oscuro se sienta el lugar en donde estás, siempre va a existir una solución, e incluso personas nuevas podés llegar a encontrar, y ambos salir de ahí. Tal vez me fui un poco por las ramas, pero espero que hayas entendido lo que te quise decir.
            En fin, para resumir, no olvides la persona que sos y en la que aspirás convertirte y día a día trabajás para ser. Te quiero mucho mucho, bichito e' lu'. No te dejes pisar por nadie, porque nadie vale tanto como para permitirle que influya tanto en tu existencia. Transita el momento y, si lo podés solucionar, joya. Caso contrario, no te ancles y seguí con tu vida. Es la única que jamás te va a defraudar y de la que tenés que estar orgullosa, porque solo es una la que podemos recordar conscientemente.
            Espero que todo aquello que te propongas se te cumpla multiplicado por millones, como todo el amor y cariño que ofrecés al resto. Jamás dejes de tener esas ganas de descubrir cosas nuevas y hacer boludeces.
          </p>
          <p>Post Data: De última, vamos y le hacemos algo, fue ;) Siempre algo vamos a poder hacer, vos tranqui.</p>
          <p className="firma-carta">Con mucho cariño, Ori.</p>
        </div>
      ) : (
        <Polaroid />
      )}
    </div>
  );
};

export default App;
