import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to={'/'}>today</Link>
            <Link to={'/weekly'}>pending</Link>
            <Link to={'/'}>overdue</Link>
            <Link to={'/'}>completed</Link>
        </div>
    )
}

export default Navbar