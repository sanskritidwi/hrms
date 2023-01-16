import React from "react";
import employee from '../../../assets/images/emp.png'
import right from '../../../assets/images/right-circle.svg'
import wrong from '../../../assets/images/cross-circle.svg'
import arrowright from '../../../assets/images/arrow-right-solid.svg'
import { useParams } from "react-router-dom";

const CardEmpHeader = () => {

    const params = useParams();
	const {id } = params;

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
                    </h4>
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
            <div className="CardEmpHeaderWrapper ">
                {renderHeading()}
                <div className="emp-detail-wrap">
                    {renderDetail()}
                    {renderDocument()}
                    
                </div>
            </div>
        </>
    );
}


export default CardEmpHeader;