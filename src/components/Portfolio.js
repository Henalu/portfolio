import React from 'react'
import { projects } from '../data/projects'

const Portfolio = () => {

  const video = (
    <iframe title='sierra-norte-video' width="100%" height="200" src="https://www.youtube.com/embed/GhTdJryGjYo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )

  return (
    <div className='portfolio'>
      {
        projects.map((project, index) => {
          return (
            <div className='item' key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title} /></a>
              <article>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h2>{project.title}</h2>
                </a>
                <h3>Categoría: {project.category}</h3>
                <h4>Tecnologías: {project.technologies}</h4>
                <p>
                  {project.description}{project.id === 1 && (
                    <div>
                      <p>
                        <a className='link' href='https://www.youtube.com/watch?v=GhTdJryGjYo' target='_blank' rel='noopener noreferrer'>Aquí</a> puedes ver un pequeño video sobre su funcionamiento:
                      </p>
                      <p className='video-container'>{video}</p>
                    </div>
                  )}
                </p>
                <p className='github'>Para echarle un vistazo al código entra en <a href={project.github} target='_blank' rel='noopener noreferrer'>GitHub</a></p>
              </article>
            </div>
          )
        })
      }
    </div>
  )
}

export default Portfolio
