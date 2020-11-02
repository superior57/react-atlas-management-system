import { makeStyles } from '@material-ui/core/styles';

import { 
	Container, 
	Paper, 
	TableContainer, 
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Typography,
	Button } from '@material-ui/core';

import React, {	useState } from 'react';
import clsx from "clsx";
import { Search } from "@material-ui/icons";
import { months } from 'moment';

const MONTHS= [
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JUL",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC"
];

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	textField: {
		width: "100%",
		marginRight: ".5rem",
	},
	formControl: {
		minWidth: 120,
	},
	spacingBottom: {
		marginBottom: "1rem"
	},
	spacingBottomSmall: {
		marginBottom: '0.5rem'
	},
	select: {
		height:40
	},
	noPadding: {
		padding:0,
		minWidth:'15px'
	},
	noTransform: {
		textTransform:"none"
	}
}));

function isEmpty(value) {
	return value ? value : "";
}

function HeaderContent(props) {
	console.log(props);
	const [state, setState] = useState({});

	const classes = useStyles(props);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}
	const years = [
		"2020",
		"2021"
	];

	return <React.Fragment>
		<TableContainer component={Paper} className="flex w-full">
			<div className="flex px-24 py-16 items-center w-full">
				<Grid container className="flex justify-between">
					<div className="flex">
						<FormControl variant="outlined" className={clsx(classes.formControl, "md:mr-48 mb-8")} size="small">
							<InputLabel id={`select-label-vessel`}>Vessel</InputLabel>
							<Select
								labelId={`select-label-vessel`}
								label="Vessel"
								value={isEmpty(state.vessel)}
								onChange={handleChange}
								name="vessel"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Item 1</MenuItem>
								<MenuItem value={2}>Item 1</MenuItem>
							</Select>
						</FormControl>
					</div>
					<Button 
						variant="contained"
						color="primary"
						size="small"
						className="mb-8 mr-5"
					>
						<Search />
						Search
					</Button>
				</Grid>
			</div>
		</TableContainer>
	</React.Fragment>
}

export default HeaderContent;
