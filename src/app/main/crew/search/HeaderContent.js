import { makeStyles } from '@material-ui/core/styles';
import React, {
	useState
} from 'react';

import { 
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from '@material-ui/core';
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	textField: {
		width: "100%",
		marginRight: ".5rem",
	},
	formControl: {
		minWidth: 120,
	},
}));

function HeaderContent(props) {
	const [state, setState] = useState({
		sex: "",
		country: "",
		nearest_port: "",
		rank: "",
		nation: "",
		religion: "",
		marital_status: "",
		manning_agent: "",
		only_for_manager: ""
	});

	const classes = useStyles(props);
	return <>
	 	<h3>Header ... </h3>
	</>;
}

export default HeaderContent;
