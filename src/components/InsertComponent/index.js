import React from 'react'
import "./index.css"
import { Card, CardBody, CardHeader } from 'reactstrap'

function Insert(props) {
 //console.log(props)
        if (!props.data){
            return (<div>
            Loading...</div>)
        } else {
            return (
        <div className="insert">
            {/* <div className="insert_item"> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">IP address</CardHeader>
                    <CardBody tag="h5">{props.data.ip}</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">Location</CardHeader>
                    <CardBody tag="h5">{props.data.location.city}, {props.data.location.region}<br /> {props.data.location.postalCode}</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">Time- Zone</CardHeader>
                    <CardBody tag="h5">{props.data.location.timezone}</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">ISP</CardHeader>
                    <CardBody tag="h5">{props.data.isp}</CardBody>
                </Card>
            {/* </div> */}
            
        </div>
    )
}
}

export default Insert
