import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import React from 'react';
import { Checkbox } from './Checkbox';
import { Dateform } from './Date';
import { Textare } from './textarea';

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
                    {props.titlemain}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className='popup-label'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <Dateform titlelabel='Event' formlabel='Form' />
                                </div>
                                <div className='col-lg-6'>
                                    <Dateform titlelabel='Number of days: 3' formlabel='To' />
                                </div>
                                <div className='col-lg-6'>
                                    <Dateform titlelabel='Start Time' formlabel='Form' />
                                </div>
                                <div className='col-lg-6'>
                                    <Dateform titlelabel='3 Hrs' formlabel='To' />
                                </div>
                                <div className='col-lg-12'>
                                    <Textare />
                                </div>
                                <div className='col-lg-12'>
                                    <div className='d-flex common-btn'>
                                        <a href="javascript:;" className='main-cancel-btn'>Cancel</a>
                                        <a href="javascript:;" className='main-btn'>Submit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Button>Submit</Button> */}
                </Form>
            </Modal.Body>
            {/* <Modal.Footer className='border-0 justify-content-start'>
                    <a href="javascript:;" className='main-cancel-btn'>Cancel</a>
                    <a href="javascript:;" className='main-btn'>Submit</a>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}
