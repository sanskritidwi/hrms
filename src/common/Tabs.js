/**  
	  	const tabData = [
		{
			id: "pd",
			title: "Personal Details",
			keyevent: "pd",
			body: () => renderPersonalDetails(),
		},
		{
			id: "document",
			title: "Documents",
			keyevent: "document",
			body: () => renderDocuments(),
		},
		{
			id: "pastemp",
			title: "Past Employment Details",
			keyevent: "pstemp",
			body: () => renderPastEmploymentDetails(),
		},
	];
     */



import { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";

const Tabcustom = ({tabData}) => {

 
    return (
        <>
            <div className="tabs-wrapper pageBody">
                <Tab.Container id="left-tabs-example" defaultActiveKey="pd">
                    <Nav variant="pills">
                        {
                            tabData.map((data, index) => {
                                return (
                                    
                                        <Nav.Item key={index}>
                                            <Nav.Link eventKey={data.keyevent}>{data.title}</Nav.Link>
                                        </Nav.Item>
                                    
                                )
                            })
                        }
                    </Nav>
                    <Tab.Content>
                        {
                            tabData.map((data, index) => {
                                return (
                                    
                                        <Tab.Pane eventKey={data.keyevent} key={index}>
                                            {data.body()}
                                        </Tab.Pane>
                                )
                            })
                        }
                    </Tab.Content>
                </Tab.Container>
            </div>
        </>
    )

}

export default Tabcustom;