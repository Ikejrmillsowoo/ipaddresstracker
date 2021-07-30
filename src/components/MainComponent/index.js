import React, { useState } from 'react'
import Api from '../../api'
import Header from '../HeaderComponent'
import Map from '../MapComponent'
import './index.css'

function Main() {
    

     const [api, setApi] = useState('')

    const onSubmit =(e, newApi)=> {       
        setApi(newApi)

        e.preventDefault()
    }

    return (
        <div >
            <div className="middle_insert mt-3">
                <Api api={api}/>
            </div>
        <div className="main">
            <div className="head">
                 <Header onSubmit={onSubmit}/>
                <Map /> 
            </div>
        </div>
       
            
        </div>
      
    )
}

export default Main
