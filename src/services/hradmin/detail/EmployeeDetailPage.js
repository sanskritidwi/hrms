// import emp from '../assets/images/emp'

import React from "react";

const EmployeeDetailPage = ({ schema }) => {

    const {
        currentheading,
        empheading,
        empprofile,
        empteam,
        empdate,
        empprsnldetail,
        empdocument,
        emppostdetail,
        emprequest,
        empimage,
        rightmark,
        wrongmark,
        threedot,
        rightarrow
    } = schema;
    const renderHeading = () => {
        return (
            <>
                <div className='emp-head'>
                    <h4>{currentheading}
                        <img src={rightarrow} />
                    </h4>
                    <img src={threedot} />
                </div>
            </>
        );
    }

    const renderDetail = () => {
        return (
            <>
                <div className="emp-detail">
                    <div>
                        <img src={empimage} />
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
                            <span> <img src={rightmark} /> </span>
                            {empprsnldetail}</li>
                        <li>
                            <span> <img src={rightmark} /> </span>
                            {empdocument}</li>
                        <li>
                            <span> <img src={wrongmark} /> </span>
                            {emppostdetail} <a href="javascript:;">{emprequest}</a> </li>
                    </ul>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="emp-wrapper">
                        {renderHeading()}
                        <div className="emp-detail-wrap">
                            {renderDetail()}
                            {renderDocument()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default EmployeeDetailPage;