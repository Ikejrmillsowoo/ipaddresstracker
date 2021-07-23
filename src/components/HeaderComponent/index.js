import React from 'react'
import './index.css'
import UserInput from '../InputComponent'


function Header() {

    

    return (
        <div className="header" style={{ backgroundImage: "url(/images/pattern-bg.png)" }}>
            <h3 className="text-center">IP Address Tracker</h3>
            <UserInput />
        </div>
    )
}

export default Header
