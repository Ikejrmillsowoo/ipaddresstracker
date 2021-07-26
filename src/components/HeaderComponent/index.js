import React from 'react'
import './index.css'
import UserInput from '../InputComponent'


function Header(props) {

    

    return (
        <div className="header" style={{ backgroundImage: "url(/images/pattern-bg.png)" }}>
            <h3 className="text-center pt-3">IP Address Tracker</h3>
            <UserInput  api={props.onSubmit}/>
        </div>
    )
}

export default Header
