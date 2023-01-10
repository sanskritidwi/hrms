import React, { useState } from 'react'
// import EmployeeDetailPage from '../services/hradmin/detail/EmployeeDetailPage';
// import { Dateform } from './Date';
// import Popup from './Popup';
// import { Textarea } from './textarea';
// import employee from '../assets/images/emp.png'
// import right from '../assets/images/right-circle.svg'
// import wrong from '../assets/images/cross-circle.svg'
// import dot from '../assets/images/side-dot.svg'
// import arrowright from '../assets/images/arrow-right-solid.svg'
// import { Tabcustom } from './tabs';

export const NishaCanvas = () => {
  const [show, setShow] = useState(false);
  // const renderBody = () => {
  //   return (
  //     <>
  //       <div className="modal-body">
  //         <div className="popup-label">
  //           <form className="row">
  //             <div className='col-lg-6'>
  //               <Dateform titlelabel='Event Date' formlabel='Form' />
  //             </div>
  //             <div className='col-lg-6'>
  //               <Dateform titlelabel='Number of days: 3' formlabel='To' />
  //             </div>
  //             <div className='col-lg-6'>
  //               <Dateform titlelabel='Start Time' formlabel='Form' />
  //             </div>
  //             <div className='col-lg-6'>
  //               <Dateform titlelabel='3 Hrs' formlabel='To' />
  //             </div>
  //             <div className='col-lg-12'>
  //               <Textarea />
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  // const modalschema = {
  //   titleModal: "Add Event",
  //   customBody: renderBody(),
  //   buttons: ["cancel", "submit"],
  // }
  // const empschema = {
  //   currentheading: "Current Emplay",
  //   empheading: "Meaghan Cpmpigotto",
  //   empprofile: "Software Engineer",
  //   empteam: "React JS Team",
  //   empdate: "Since 21 November 2022",
  //   empprsnldetail: "Personal Details",
  //   empdocument: "Documents",
  //   emppostdetail: "Post Employment Details",
  //   emprequest: "Request",
  //   empimage: employee,
  //   rightmark: right,
  //   wrongmark: wrong,
  //   threedot: dot,
  //   rightarrow: arrowright
  // }

  return (
    <div className="App">
      <button onClick={(e) => setShow(true)}>Show Modal</button>
      {/* <Popup schema={modalschema} show={show} />

      <EmployeeDetailPage schema={empschema} />
      <Tabcustom /> */}
    </div>
  );
}

export default NishaCanvas;