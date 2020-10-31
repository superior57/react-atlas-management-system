import React, {
	useState
} from 'react';

import { 
	Button,
	colors
} from '@material-ui/core';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
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
	const classes = useStyles(props);
	return <>
		{/* <h3>Header ...</h3> */}
	</>;
}

export default HeaderContent;
