import React, {useState} from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function UserInput(props) {

    const [newApi, setNewApi] = useState({
        value: ''
    })

   const onChange =(e) => {       
        setNewApi({
            value: e.target.value
        })
    }


//console.log(newApi.value)
    return (
        <Form onSubmit={(e) => props.onSubmit(e, newApi.value)}
        >
            <FormGroup className='input_form mx-auto' >
             <Input value={newApi.value} className="entry_form" onChange={onChange} name="entry" id="entry" placeholder="Search for any IP address or domain"/>
             <Button type="submit" value="submit"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></Button>
            </FormGroup>
        </Form>
    )
}

export default UserInput
