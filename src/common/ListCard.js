import React, { useState } from "react";

const ListCard = ({data}) => {

	return (
		<div className="ListCardWrapper">
			<div className="title">{data.heading}</div>
			{data.items.map((item, index) => {
				return <div className="section">
                    <div className="subheading">{item.subheading}
                    <hr/></div>
                    <div className="profileThumbnails">
                        {
                            item.empList.map((profile, index)=>{
                                return(<div className="profileImgDiv">
                                <img src={profile.img} alt="noimg" />
                                </div>)
                            })
                        }
                    </div>
                    </div>;
			})}
		</div>
	);
};

export default ListCard;
