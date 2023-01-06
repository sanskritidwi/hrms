import React from "react";
import employee from '../assets/images/emp.png'
import right from '../assets/images/right-circle.svg'
import wrong from '../assets/images/cross-circle.svg'
import arrowright from '../assets/images/arrow-right-solid.svg'

const EmployeeDetailPage = ({ empschema, prsnlemp }) => {

    const {
        currentheading,
        empprsnldetail,
        empdocument,
        emppostdetail,
        emprequest,
    } = empschema
    const {
        empheading,
        empprofile,
        empteam,
        empdate,
    } = prsnlemp
    const renderHeading = () => {
        return (
            <>
                <div className='emp-head'>
                    <h4>{currentheading}
                        {/* <img src={arrowright} /> */}
                    </h4>
                    {/* <img src={employee} /> */}
                </div>
            </>
        );
    }

    const renderDetail = () => {
        return (
            <>
                <div className="emp-detail">
                    <div>
                        <img src={employee} />
                    </div>
                    <div className="emp-content">
                        <h5>{empheading}</h5>
                        <h6>{empprofile}</h6>
                        <p>{empteam}</p>
                        <p>{empdate}</p>
                    </div>
                </div>
            </>
        );
    }

    const renderDocument = () => {
        return (
            <>
                <div className='emp-document'>
                    <ul>
                        <li>
                            <span> <img src={right} /> </span>
                            {empprsnldetail}</li>
                        <li>
                            <span> <img src={right} /> </span>
                            {empdocument}</li>
                        <li>
                            <span> <img src={wrong} /> </span>
                            {emppostdetail} <a href="#">{emprequest}</a> </li>
                    </ul>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="emp-wrapper pageBody">
                {renderHeading()}
                <div className="emp-detail-wrap">
                    {renderDetail()}
                    {renderDocument()}
                </div>
            </div>
        </>
    );
}


export default EmployeeDetailPage;