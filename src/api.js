import React, { useState, useEffect } from "react"
import { apiKey } from "./sourceData"
import Insert from "./components/InsertComponent"
import Map from "./components/MapComponent"


export const ipAddress  = "8.8.8.8"
const url = `https://geo.ipify.org/api/v1?`

function FetchData(props) {
    const ipAddress = props.api
    
    const [data, setData] = useState({
        data: ""
    })

     useEffect(()=>{
        async function getData() {
            const response = await fetch(`${url}apiKey=${apiKey}&ipAddress=${ipAddress}`)
            const responseJSON = await response.json()
            console.log(responseJSON)
            setData({
                data: responseJSON
            })
        }

       getData()
     }, [ipAddress])

   

    return <div>
        
        <Insert data={data.data} />
        <Map data={data.data} />
    </div>
    
}




export default FetchData
