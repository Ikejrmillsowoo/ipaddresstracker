import React from 'react'
import './index.css'
import UserInput from '../InputComponent'


function Header() {

    const img = "./"

    return (
        <div className="header" style={{ backgroundImage: "url(/images/pattern-bg.png)" }}>
            <h1 className="text-center">IP Address Tracker</h1>
            <UserInput />
        </div>
    )
}

export default Header
