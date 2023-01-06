import React from "react"
import { SearchBar } from "../../../common/SearchBar"
import { EmpCard } from "./EmployeeCard"
import { EventCard } from "../../../common/EventCard"
import Employee1 from '../../../assets/images/em1.png'
import Employee2 from '../../../assets/images/em2.png'
const CurrentEmployee = () => {
    const searchSchema = {
        placeholder :"searchh"
    }
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
          image : Employee1,
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
        {
          name: "kavita",
          designation : "software engineer",
          team : "frontend team",
          image : Employee2,
        },
    ]
    // for event card object
    const eventList = [
      "Meaghan Cpmpigotto",
      "Meaghan Cpmpigotto",
      "Meaghan Cpmpigotto",
      "Meaghan Cpmpigotto"
    ]

    const renderBody=()=>{
      return(
        <>
          {
           <ul className="eventList">
              {
                eventList.map((data)=> <li>{data}</li>)
              }
           </ul>
          }
        </>
      )
  }
    return(
        <>
            
            <SearchBar schema={searchSchema}/>
            <div>
                <EmpCard empData ={empRecord}/>
                <EventCard title="Pending information" renderBody={renderBody}/>
            </div>
        </>
    )
}

export default CurrentEmployee;