import React , {useState} from "react";
import OutsideClickHandler from "./OutsideClickHandler";

const Popup = ({ schema , show }) => {

    const [popupOpen , setPopupOpen] = useState(false)

	const renderHeader = (value) => {
		return (
			<>
				<div className="modal-header">
					<h4 className="modal-title">{value}</h4>
					{/* <button onClick={onClose} className="btn-close"></button> */}
				</div>
			</>
		);
	};

	const renderButton = (btnArr) => {
		return (
			<>
				{btnArr.map((item, index) => {
					return (
						<>
							{" "}
							<button href="" className="main-btn">
								{item}
							</button>
						</>
					);
				})}
				{/* <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='d-flex common-btn'>
                                <button href="" className='main-cancel-btn' onClick={onClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div> */}
			</>
		);
	};

	const renderItem = (key, value) => {
		switch (key) {
            case "customBody":
				return <>{value}</>;
				break;
                case "buttons":
				return <>{renderButton(value)}</>;
				break;
			case "titleModal":
				return <>{renderHeader(value)}</>;
				break;
			
			
		}
	};

    if(!show) return null;
	return (
		<>
        <OutsideClickHandler callbackFunction={()=>{setPopupOpen(false)}}>
			{Object.entries(schema).map(([key, value]) => {
				console.log(key, schema[key]);
				return renderItem(key, schema[key]);
			})}
			{/* <div className="modal">
                <div className="modal-content"> */}

			{/* {customBody} */}
			{/* {renderButton()} */}
			{/* </div>
            </div> */}
            </OutsideClickHandler>
		</>
	);
};

export default Popup;
