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

function BodyContent(props) {
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

	const [searchText, setSearchText] = useState('');
	function handleSearchText(event) {
		setSearchText(event.target.value);
	}

	const [testname, setTestname] = useState("");

	const handleChangeText = (e) => {
		setTestname(e.target.value);
	};

	const classes = useStyles(props);
	return <>
	 	<h3>Body ...</h3>
	</>;
}

export default BodyContent;
