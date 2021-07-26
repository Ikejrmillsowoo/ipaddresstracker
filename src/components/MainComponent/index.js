import React from 'react'
import { Row } from 'reactstrap'
import Api from '../../api'
import Header from '../HeaderComponent'
import Insert from '../InsertComponent'
import Map from '../MapComponent'
import './index.css'

function Main() {
    return (
        <div >
            <div className="middle_insert">
                <Insert />
            </div>
        <div className="main">
            <div className="head">
                 <Header />
            {/* </div>
            <div className="map_item"> */}
                <Map /> 
            </div>
        </div>
       
            
        </div>
      
    )
}

export default Main
