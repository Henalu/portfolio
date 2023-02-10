import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'><span>H</span><h3>Henalu Paes de Barros</h3></div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home' className={({isActive})=> isActive ? 'active' : ''}>Acerca de</NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio' className={({isActive})=> isActive ? 'active' : ''}>Portfolio</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/services' className={({isActive})=> isActive ? 'active' : ''}>Servicios</NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/curriculum' className={({isActive})=> isActive ? 'active' : ''}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({isActive})=> isActive ? 'active' : ''}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav
