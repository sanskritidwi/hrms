import React, { useState } from 'react'
import { FormProcessor } from '../../common/FormFields/FormProcessor';
import { PageHeader } from '../../common/PageHeader';

const formSchema =  {
	submitEnable: "true",
	submitText:"Apply",
	schema: [
		{
			type: "uploadfile",
			schema: {
				label: "Upload File",
			},
		},
		{
			type: "input",
			schema: {
				placeHolder: "XXXX - XXXX",
				name: "billNo",
				id: "planet",
				type: "text",
				label: "Bill No",
			},
		},
		{
			type: "input",
			schema: {
				placeHolder: "For Office Slippers",
				name: "for",
				id: "planet",
				type: "text",
				label: "For",
			},
		},
		
	],
};

const Reimbursements = () => {
  const [newReimbursement, setnewReimbursement] = useState(false);

	const renderLeaveRecord = ()=>{
		if (newReimbursement) return null;
		return (<>
		<PageHeader pageheading="Reimbursements" />
			<button
				className="defaultButtonPrimary"
				onClick={() => {
					setnewReimbursement(true);
				}}>
				Apply for reimbursement
			</button>
		</>)
	}

	const renderApplyNew = () => {
		if (!newReimbursement) return null;
		return (
			<>
			<div className="d-flex align-items-center my-3">
			<div className="iconBlackBack my-3" onClick={()=>{setnewReimbursement(false);}}></div>
				<PageHeader pageheading="Claim Reimbursement" />
			</div>
				
				<FormProcessor schema={formSchema}/>
			</>
		);
	};

	return (
		<div className="LeaveWrapper pageBody">
			{renderLeaveRecord()}
			{renderApplyNew()}
		</div>
	);
}


export default Reimbursements;