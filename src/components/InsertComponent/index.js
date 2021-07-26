import React from 'react'
import "./index.css"
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

function Insert() {
    return (
        <div className="insert">
            {/* <div className="insert_item"> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">IP address</CardHeader>
                    <CardBody tag="h3">198.156.91.90</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">Location</CardHeader>
                    <CardBody tag="h3">Bear De  <br /> 19701</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">Time- Zone</CardHeader>
                    <CardBody tag="h3">UTC 05:00</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">ISP</CardHeader>
                    <CardBody tag="h3">Space X starLink</CardBody>
                </Card>
            {/* </div> */}
            
        </div>
    )
}

export default Insert
