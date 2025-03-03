import logo from '../assets/HTB_Logo.png'
import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <span className='title'>
                <img src={logo} width={50} height={50} alt="Logo" />
                <h1>Hack The Border</h1>
            </span>
            <div>
                <ul className="list">
                    <Link to='/' className="list-item">Home</Link>
                    <Link to='/Workshops' className="list-item">Workshops</Link>
                    <Link to='/Hackathon' className="list-item">Hackathon</Link>
                    <Link to='/Datathon' className="list-item">Datathon</Link>
                    <Link to='/About' className="list-item">About</Link>
                </ul>
            </div>
        </header>
    );
}