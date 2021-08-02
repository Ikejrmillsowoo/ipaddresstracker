import React, { useState } from 'react'
import Api from '../../api'
import Header from '../HeaderComponent'
import './index.css'

function Main() {
   

     const [api, setApi] = useState('')


    const onSubmit =(e, newApi)=> {       
        setApi(newApi)

        e.preventDefault()
    }


       
    return (
        <div className="full_main">
            <div className="middle_insert mt-3">
                <Api api={api} />
            </div>
        <div className="main">
            <div className="head">
                 <Header onSubmit={onSubmit}/>
                {/* <Map data={data.data}/>  */}
            </div>
        </div>
       
            
        </div>
      
    )
}

export default Main
