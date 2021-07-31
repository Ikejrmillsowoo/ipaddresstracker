import React, { useState } from 'react'
import Api from '../../api'
import Header from '../HeaderComponent'
import Map from '../MapComponent'
import './index.css'

function Main() {
   

     const [api, setApi] = useState('')

     const [data, setData] = useState('')

    const onSubmit =(e, newApi)=> {       
        setApi(newApi)

        e.preventDefault()
    }

    const getData=(dataFetched) => {
       // console.log(dataFetched)
        setData(dataFetched)
    }

    //console.log(data.data)
       
    return (
        <div >
            <div className="middle_insert mt-3">
                <Api api={api} getData={getData}/>
            </div>
        <div className="main">
            <div className="head">
                 <Header onSubmit={onSubmit}/>
                <Map data={data.data}/> 
            </div>
        </div>
       
            
        </div>
      
    )
}

export default Main
