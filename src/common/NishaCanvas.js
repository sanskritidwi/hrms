import React, { useState } from 'react'
import { Dateform } from './Date';
import { PopupModal } from './Popup';
import { Textarea } from './textarea';

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
    customBody: renderBody()
  }

  return (
    <div className="App">
      <button onClick={(e) => setShow(true)}>Show Modal</button>
      <PopupModal schema={modalschema} onClose={() => setShow(false)} show={show} />
    </div>
  );
}
