import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import './index.css'

function Map(props) {
  console.log(props.data.location)

  const location = !props.data ? [51.505, -0.09] : [props.data.location.lat, props.data.location.lng]
  console.log(location)

  function ChangeMapView({coords}) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }
 
    return (
        <div>
             <MapContainer className="main" center={location} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='{&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors}'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={location}>
                    <Popup>
                        `You are in ${props.data.city}, ${props.data.region}`
                    </Popup>
                </Marker>
            <ChangeMapView coords={location}/>
            </MapContainer>
        </div>
    )
}

export default Map
