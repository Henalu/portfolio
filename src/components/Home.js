import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1>
        ¿Quién Soy?
      </h1>
      <p>
        <strong>Soy Henalu</strong>, un entusiasta, emprendedor, viajante, explorador, deportista, curioso, inquieto, motivado... Alguien apasionado por los nuevos retos, el autoconocimiento, el movimiento y sobretodo por continuar aprendiendo, creciendo.
      </p>
      <p>
        Tras un salto profesional y mi paso por el bootcamp en <strong><a href='https://www.thebridge.tech/' target='_blank' rel='noopener noreferrer'>The Bridge (Madrid)</a></strong>, encontré un nuevo camino en el que desarrollarme personal y profesionalmente. Aprendí no solo a programar, sino también todo lo que conlleva ser programador: la superación, saber lidiar con la frustación, mantenerse actualizado, compartir ideas, investigar nuevas tecnologías, mantener la mente abierta...
        Y para todo esto, los proyectos personales pero sobre todo los de equipo, fueron clave.
      </p>
      <p>
        Tecnologías como: <strong>Javascript, React, Nodejs, MongoDB, CSS, MySql…</strong> se han convertido en mi desayuno, almuerzo y cena durante los últimos meses. Hay tanto que aprender y en lo que profundizar que lo dificil no es el qué si no el cuándo.
      </p>
      <p>
        <i>“Trabajo duro, creatividad y ganas de aprender y crecer”.</i> Tras 10 años como autónomo, evolucionando, cambiando y adaptándome constantemente, he interiorizado lo que supone enfrentarse a una gran variedad de obstáculos y a no vacilar ni rendirse frente a ninguna adversidad. Y no, no lo sé todo, ni de cerca, pero me alegro inmensamente por ello, esto significa que tengo mucho más que aprender. Soy implacable cuando estoy motivado y nada me motiva más que tener retos, proyectos, sueños, ideas...
      </p>
      <h2>
        Si quieres saber más <Link to='/contact' className='contact-link'>Contacta conmigo</Link>
      </h2>
    </div>
  )
}

export default Home
