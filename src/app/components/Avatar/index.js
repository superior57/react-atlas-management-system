import React,{ useState } from "react";
import axios from "axios";

export const EditableAvatar = () =>{ 

	const [ state, setState ] = useState({
		file: ""
	});

	const toBase64 = file => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		// console.log(await toBase64(file));
		if(file) {
			setState({
				...state,
				file: await toBase64(file)
			});
		}		
	}

	return 	<>
		<img 
			src={state.file}
		/>
		<input
			type="file"
			accept="image/*"
			style={{
				position: "absolute",
				maxWidth: "100%",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				opacity: 0,
				cursor: "pointer"
			}}
			onChange={(event) => handleFileChange(event)}
		/>
	</>;
}