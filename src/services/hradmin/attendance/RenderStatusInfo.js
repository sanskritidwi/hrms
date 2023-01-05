import React, {useState} from "react";

const RenderStatusInfo = ({ timeInfo}) => {

const {status, timeIn, timeOut} = timeInfo;

    const [timeDetail, setTimeDetail] = useState(false);

    const renderTimeDetailsHover = ()=>{
        return(<div className="hoverInfoBox">
			<div>Time In : {timeIn}</div>
			<div>Time Out : {timeOut}</div>
			</div>)
    }

	return (
		<>
			<div className="RenderStatusInfoWrapper">
				<td
					onMouseEnter={() => setTimeDetail(true)}
					onMouseLeave={() => setTimeDetail(false)}
				>
					{status}
				</td>
				{timeDetail && <>{renderTimeDetailsHover()}</>}
			</div>
		</>
	);
};

export default RenderStatusInfo;
