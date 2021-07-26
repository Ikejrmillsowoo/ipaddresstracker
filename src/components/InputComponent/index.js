import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function UserInput(props) {

   const onChange =(e) => {
        const target = e.target
        const value = target.value
        console.log(value)

        e.preventDefault()
    }
    return (
        <Form>
            <FormGroup  onSubmit={props.onSubmit} className='input_form mx-auto' >
             <Input onChange={onChange} placeholder="Search for any IP address or domain"/>
             <Button type="submit" onSubmit={props.onSubmit}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></Button>
            </FormGroup>
        </Form>
    )
}

export default UserInput
