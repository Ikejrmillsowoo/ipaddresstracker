import React, { useState } from 'react'
import { Row } from 'reactstrap'
import Api from '../../api'
import Header from '../HeaderComponent'
import Insert from '../InsertComponent'
import Map from '../MapComponent'
import './index.css'

function Main() {

     const [api, setApi] = useState("8.8.8.8")

    const onSubmit =(e, newApi)=> {
        console.log(newApi)
        setApi(newApi)
    }



    return (
        <div >
            <div className="middle_insert mt-3">
                <Insert />
            </div>
        <div className="main">
            <div className="head">
                 <Header onSubmit={onSubmit}/>
            {/* </div>
            <div className="map_item"> */}
                <Map /> 
            </div>
        </div>
       
            
        </div>
      
    )
}

export default Main
