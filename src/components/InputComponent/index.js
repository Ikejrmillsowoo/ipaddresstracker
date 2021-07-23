import React from 'react'
import './index.css'
import { Button, Form, FormGroup, Input } from 'reactstrap'

function UserInput() {
    return (
        <Form>
            <FormGroup className='input_form mx-auto'>
             <Input placeholder="Search for any IP address or domain"/>
             <Button color="secondary"><i className="fa fa-search">button</i></Button>
            </FormGroup>
        </Form>
    )
}

export default UserInput
