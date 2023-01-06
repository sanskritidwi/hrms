import { Tab, Tabs } from "react-bootstrap";

export const Tabcustom = () => {

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
            target: "#pd",
            body: "sdfzhdjh,d",
        },
        {
            id: "document",
            title: "Documents",
            body: "sdfzhdjh,d"
        },
        {
            id: "ped",
            title: "Past Employment Details",
            body: "sdfzhdjh,d"
        }
    ]
    return (
        <>
            <div className="tabs-wrapper">
                <div className="container">
                    <div className="row">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            {
                                tabData.map((data) => {
                                    return (
                                        <>
                                            <li class="nav-item">
                                                <button class="nav-link" id={data.id} data-bs-toggle="tab" data-bs-target={data.target} aria-selected="true">{data.title}</button>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            {
                                tabData.map((data) => {
                                    return (
                                        <>
                                            <div class="tab-pane fade show" id={data.id} >{data.body}</div>
                                        </>
                                    )
                                })
                            }
                            {/* <div class="tab-pane fade show active" id="pd" role="tabpanel" aria-labelledby="home-tab">dtfgdfg</div>
                            <div class="tab-pane fade" id="document" role="tabpanel" aria-labelledby="profile-tab">serfsetf</div>
                            <div class="tab-pane fade" id="ped" role="tabpanel" aria-labelledby="contact-tab">rdtgdrsgv</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

