import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.css'

function Map(props) {
    console.log(props.data)
    
    return (
        <div>
             <MapContainer className="main" center={[props.data.location.lat, props.data.location.lat]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='{&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors}'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.data.location.lat, props.data.location.lat]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map
