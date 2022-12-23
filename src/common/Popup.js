import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import React from 'react';
import { Checkbox } from './Checkbox';
import { Dateform } from './Date';

export function Modalpopup(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered className='modal-wrap'
        >
            <Modal.Header closeButton className='justify-content-center'>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className='popup-label'>
                        <div>
                            <Dateform />
                            <Checkbox office='In Office' id="office" />
                            <Checkbox office='Apply for WFH' id="apply" />
                        </div>
                    </div>
                    <Button>Submit</Button>
                </Form>
            </Modal.Body>
            {/* <Modal.Footer className='border-0'>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}
