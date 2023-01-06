import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
// import { NishaCanvas } from "./NishaCanvas";
import Popup from "./Popup";

export const Tabcustom = () => {

    const [activeTab, setActiveTab] = useState(1);

    const renderbodytab = () => {
        return (
            <>

            </>
        );
    }
    const tabData = [
        {
            id: "pd",
            title: "Personal Details",
            keyevent: "pd",
            body: ()=><Popup />,
        },
        {
            id: "document",
            title: "Documents",
            keyevent: "document",
            body: ()=><Popup />
        },
        {
            id: "ped",
            title: "Past Employment Details",
            keyevent: "ped",
            body: ()=><Popup />
        }
    ];

    return (
        <>
            <div className="tabs-wrapper pageBody">
                <Tab.Container id="left-tabs-example" defaultActiveKey="pd">
                    <Nav variant="pills">
                        {
                            tabData.map((data) => {
                                return (
                                    <>
                                        <Nav.Item>
                                            <Nav.Link eventKey={data.keyevent}>{data.title}</Nav.Link>
                                        </Nav.Item>
                                    </>
                                )
                            })
                        }
                    </Nav>
                    <Tab.Content>
                        {
                            tabData.map((data) => {
                                return (
                                    <>
                                        <Tab.Pane eventKey={data.keyevent}>
                                            {data.body()}
                                        </Tab.Pane>
                                    </>
                                )
                            })
                        }
                    </Tab.Content>
                </Tab.Container>
            </div>
        </>
    )

}