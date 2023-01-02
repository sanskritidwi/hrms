import React, { useState } from 'react';
// import React from 'react';
import Button from 'react-bootstrap/Button';
import { Modalpopup, PopupModal } from './common/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from 'react-bootstrap/Modal';

// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './App.css';
import './styles/css/all.css'
import { Dateform } from './common/Date';
import { Textarea } from './common/textarea';
// import './styles/sass/all.scss'
function App() {
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
      <PopupModal schema={modalschema} onClose={() => setShow(false)} show={show}  />
    </div>
  );
}

export default App;
