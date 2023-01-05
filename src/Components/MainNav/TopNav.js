import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../../Components/MainNav/TopNav.css'


export default function TopNav() {
    return (
        <nav className='nav'>
            <Link to="/">Home</Link>
            <ul>
                <CustomLink to="/instructions">Instructions</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
                <CustomLink to="/Log Out">Log Out</CustomLink>
            </ul>
        </nav>

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}