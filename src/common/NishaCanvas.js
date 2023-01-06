import React, { useState } from 'react'
import EmployeeDetailPage from '../services/hradmin/detail/EmployeeDetailPage';
import { Dateform } from './Date';
import Popup from './Popup';
import { Textarea } from './Textarea';
import { Tabcustom } from './Tabs';

export const NishaCanvas = () => {
  const [show, setShow] = useState(false);
  const renderBody = () => {
    return (
      <>
        <div className="modal-body">
          <div className="popup-label">
            <form className="row">
              <div className='col-lg-6'>
                <Dateform titlelabel='Event Date' formlabel='Form' />
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
                <Textarea />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  const modalschema = {
    titleModal: "Add Event",
    customBody: renderBody(),
    buttons: ["cancel", "submit"],
  }
  const empschema = {
    currentheading: "Current Employee",
    empprsnldetail: "Personal Details",
    empdocument: "Documents",
    emppostdetail: "Post Employment Details",
    emprequest: "Request",
  }

  const prsnlemp = {
    empheading: "Meaghan Cpmpigotto",
    empprofile: "Software Engineer",
    empteam: "React JS Team",
    empdate: "Since 21 November 2022",
  }


  return (
    <div className="App">
      <button onClick={(e) => setShow(true)}>Show Modal</button>
      <Popup schema={modalschema} show={show} onClose={()=> setShow(false)} />

      <EmployeeDetailPage empschema={empschema} prsnlemp={prsnlemp} />
      <Tabcustom />
    </div>
  );
}

export default NishaCanvas;