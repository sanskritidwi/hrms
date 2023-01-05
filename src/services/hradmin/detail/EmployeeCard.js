/*
use like this
const empRecord = [
    {
      name: "kavita",
      designation : "software engineer",
      team : "frontend team",
      image : Employee1
    },
    {
      name: "kavita",
      designation : "software engineer",
      team : "frontend team",
      image : Employee2,
    },
    {
      name: "kavita",
      designation : "software engineer",
      team : "frontend team",
      image : Employee1
    },
]
<EmpCard empData ={empRecord} />
*/


import React from "react"
import { Link } from "react-router-dom"

export const EmpCard = ({empData}) => {
    console.log(empData)
    const renderCard = (data) => {
        console.log(data)
        return(
            <>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="empCard">
                        <div className="empImage">
                            <img src={data.image}/>
                        </div>
                        <Link to ='' className="cardHeading">{data.name}</Link>
                        <h4>{data.designation}</h4>
                        <p>{data.team}</p>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <div className="EmpCard mt-5">
                <div className="container-fluid">
                    <div className="row">
                        {
                        empData.map((data) =>  renderCard(data))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}