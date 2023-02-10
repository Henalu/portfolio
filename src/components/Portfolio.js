import React from 'react'
import { projects } from '../data/projects'

const Portfolio = () => {

  const video = (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GhTdJryGjYo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
  
  return (
    <div>
      {
        projects.map((project, index) => {
          return (
            <article key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h2>{project.title}</h2>
              </a>
              <img src={project.image} alt={project.title} />
              <h3>Categoría: {project.category}</h3>
              <h4>Tecnologías: {project.technologies}</h4>
              <p>{project.description}{project.id === 1 && (<div><p>Aquí puedes ver un pequeño video sobre su funcionamiento:</p><br></br><p>{video}</p></div>)}</p>
              <p>Github: <a href={project.github} target='_blank' rel='noopener noreferrer'>{project.github}</a></p>
            </article>
          )
        })
      }
    </div>
  )
}

export default Portfolio
