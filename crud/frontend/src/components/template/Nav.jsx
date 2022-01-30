import './Nav.css'
import React from 'react'
import NavItem  from './NavItem'

export default props => 
    <aside className="menu-area">
        <NavItem  link="/" icon="home" label="Início"/>
        <NavItem link="/users" icon="users" label="Usuários" />
    </aside>