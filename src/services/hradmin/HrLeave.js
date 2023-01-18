import React from 'react'
import { FormProcessor } from '../../common/FormFields/FormProcessor';
import { PageHeader } from '../../common/PageHeader';
import { SearchBar } from '../../common/SearchBar';
import CollectionList from '../../common/table/CollectionList';

const HrLeave = () => {

  const searchSchema ={
    placeHolder:"Search"
  }

  const formSchema = {
    submitEnable: "true",
    formEditable:"true",
    schema: [
      {
        type: "dropdown",
        schema: {
          header: "Filter",
          options: ["Last 7 Days", "Last Month"],
        },
      },
    ],
  }

  const customRender = () => {

    return (<div className='d-flex'>
    <div className="approvedBtn me-5">Approve</div>
    <div className="declinedBtn">Decline</div>
    </div>)

  };
  
  const tableSchema = {
    tHead: ["Applicant", "Date Time", "Date - From", "Date - To","Number of Days", "Reason", "Type of Leave",  "Actions"],
    tData: [
      {
        id: "1",
        items: ["Sanskriti Dwivedi","16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender()],
      },
      {
        id: "2",
        items: ["Sanskriti Dwivedi","16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender()],
      },
      {
        id: "3",
        items: ["Sanskriti Dwivedi","16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender()],
      },
      {
        id: "2",
        items: ["Sanskriti Dwivedi","16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender()],
      },
      {
        id: "3",
        items: ["Sanskriti Dwivedi","16/1/23 : 12:34 PM", "16/1/23", "18/1/23","2", "Family Function","Planned Leave",  customRender()],
      },
    ],
  };


  return (
    <div className='HrLeave pageBody'>
      <PageHeader pageheading="Leave Requests"/>
      <div className='d-flex'>
        <SearchBar schema={searchSchema} />
        <div className='ms-5'><FormProcessor schema={formSchema}/></div>
      </div>
			<CollectionList schema={tableSchema}/>
    </div>
  )
}

export default HrLeave;
