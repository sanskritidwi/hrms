import React from 'react'
import { PageHeader } from '../../../common/PageHeader'

export const MonthWiseAttendance = () => {

const renderFiltersRow=()=>{
    const renderEmployeeCount=()=>{
        return <div>50 Employees</div>
    }
    const renderCalendarSelect=()=>{
        return(
            <div className='calendarSelect'>CAlendar</div>
        )
    }
    const renderSearchBar=()=>{}
    const renderDepartmentFilter=()=>{}
    const renderEmployeeFilter=()=>{}
    const renderViewDetailBtn=()=>{}

    return(

        <div className='filtersRow'>
            {renderEmployeeCount()}
            {renderCalendarSelect()}
            {renderSearchBar()}
            {renderDepartmentFilter()}
            {renderEmployeeFilter()}
            {renderViewDetailBtn()}
        </div>
    )
}



  return (
    <div className='MonthWiseAttendanceWrapper'>
       <PageHeader pageheading="Attendance"/>
       {renderFiltersRow()}
    </div>
  )
}
