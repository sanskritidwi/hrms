import React from "react";
import TreeNode from "./TreeNode";

const TeamTree = ({ treeData }) => {
	return (
		<div className="TeamTreeWrapper">
			{/* {treeData?.map((node) => (
				<>
					<hr />
					<div className="mainNode">
						<TreeNode node={node} key={node.key} />
					</div>
				</>
			))} */}
		</div>
	);
};

export default TeamTree;
