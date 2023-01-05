import React from "react"
import { SearchBar } from "../../../common/SearchBar"
import { EmpCard } from "./EmployeeCard"
import Employee1 from '../../../assets/images/em1.png'
import Employee2 from '../../../assets/images/em2.png'
export const CurrentEmp = () => {
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
    const renderBody=()=>{
      return(
        <>
          
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