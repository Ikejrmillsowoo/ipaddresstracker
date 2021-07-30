import React from 'react'
import "./index.css"
import { Card, CardBody, CardHeader } from 'reactstrap'

function Insert(props) {
   // console.log(props.data)
    return (
        <div className="insert">
            {/* <div className="insert_item"> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">IP address</CardHeader>
                    <CardBody tag="h3">8.8.8.8</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">Location</CardHeader>
                    <CardBody tag="h3">Bear De<br /> 19702</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">Time- Zone</CardHeader>
                    <CardBody tag="h3">UTZ time</CardBody>
                </Card>
            {/* </Col>
            <Col> */}
                <Card className="col-3 text-dark">
                    <CardHeader tag="h6">ISP</CardHeader>
                    <CardBody tag="h3">space x</CardBody>
                </Card>
            {/* </div> */}
            
        </div>
    )
}

export default Insert
