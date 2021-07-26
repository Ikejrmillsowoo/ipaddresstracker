import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

function Insert() {
    return (
        <div className="insert mt-3">
            {/* <div className="insert_item"> */}
                <Card className="col-3 text-dark">
                    <CardHeader>IP address</CardHeader>
                    <CardBody>198.156.91.90</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader>Location</CardHeader>
                    <CardBody>Bead De, 19701</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader>Time- Zone</CardHeader>
                    <CardBody>UTC 05:00</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader>ISP</CardHeader>
                    <CardBody>Space X starLink</CardBody>
                </Card>
            {/* </div> */}
            
        </div>
    )
}

export default Insert
