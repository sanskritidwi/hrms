import React, { useState , useRef} from "react";
import { Input } from "./Input";

const fromSchema = {
	submitEnable: "true",
	schema: [
		{
			component: "input",
			placeholder: "YOur Name",
			required: "true",
		},
	],
};

export const FormProcessor = ({ schema, formfield }) => {
	// const inputvalue = "";
	// const [userInput, setUserInput] = useState("");


    const dataRef = useRef();
    console.log(dataRef.current)

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("form Submitted");
	// 	console.log(userInput);
	// };

	// const changeHandler = (e) => {
	// 	setUserInput(e.target.value);
	// };
	// const send = () => {
	// 	inputvalue({ setUserInput });
	// };

	return (
		<div>
			{/* <form onSubmit={(e) => handleSubmit(e)}> */}
				{/* <Input changeHandler={changeHandler} send={send} /> */}
				<button onClick={send}>send</button>{" "}
			{/* </form> */}
		</div>
	);
};
