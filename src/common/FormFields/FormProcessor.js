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

export const FormProcessor = ({ schema, formfield, submitEnable, submitText }) => {
    const inputvalue = '';
    const [userInput, setUserInput] = useState("");
    // const [getValue, setgetValue] = useState("");
    // const getinput = (string) => {
    //     setgetValue(string);
    //     console.log(`value: ${getValue}`)
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form Submitted")
        console.log(userInput)
    }


    const changeHandler = (e) => {
        // userInput(e.target.value)
        setUserInput(e.target.value)
    }
    const send = () => {
        // setUserInput(inputvalue)
        inputvalue({setUserInput})
    }
    console.log(userInput)
    const renderSubmit = () => {
        if (!submitEnable) return null;
        return (
            <button type='submit' onClick={send}>{submitText}</button>
        );
    }
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} >
                <Input changeHandler={changeHandler} send={send} />
                {renderSubmit()}
                {/* <button onClick={send}>send</button> */}
                {/* {getValue} */}
            </form>
        </div>
    );
    }
// export const FormProcessor = ({ schema, formfield }) => {
// 	// const inputvalue = "";
// 	// const [userInput, setUserInput] = useState("");


//     const dataRef = useRef();
//     console.log(dataRef.current)

// 	// const handleSubmit = (e) => {
// 	// 	e.preventDefault();
// 	// 	console.log("form Submitted");
// 	// 	console.log(userInput);
// 	// };

// 	// const changeHandler = (e) => {
// 	// 	setUserInput(e.target.value);
// 	// };
// 	// const send = () => {
// 	// 	inputvalue({ setUserInput });
// 	// };

// 	return (
// 		<div>
// 			{/* <form onSubmit={(e) => handleSubmit(e)}> */}
// 				{/* <Input changeHandler={changeHandler} send={send} /> */}
// 				<button onClick={send}>send</button>{" "}
// 			{/* </form> */}
// 		</div>
// 	);
// };
