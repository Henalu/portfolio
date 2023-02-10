import React from 'react'

const Contact = () => {
  return (
    <div className='page contact'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:escriboaqui@elemailquequiera.com'>
        <input type='text' placeholder='Nombre'/>
        <input type='text' placeholder='Apellidos'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Mensaje'></textarea>
        <input type='submit' value='Enviar'/>
      </form>
    </div>
  )
}

export default Contact
