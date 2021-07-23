import React from 'react'
import Api from '../../api'
import Header from '../HeaderComponent'
import Map from '../MapComponent'
import './index.css'

function Main() {
    return (
        <div className="main">
            <div>
                 <Header />
            </div>
            <div>
                <Map /> 
            </div>
            
        </div>
    )
}

export default Main
