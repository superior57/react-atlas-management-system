import { DataGrid} from "@material-ui/data-grid";

import React, {  } from 'react';
import { useHistory } from "react-router-dom";
import HeaderContent from './HeaderContent';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { Grid, Typography, TableCell, Table, TableRow, TableBody, TableHead } from "@material-ui/core";
import TableSchedule from "./TableSchedule";
import { makeStyles } from "@material-ui/core/styles";
import { data_head, data } from "./demoData";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650
	},
	tablerow: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}));

const createData = (id, name, rank, w, s_p, data) => {
    return {id, name, rank, w, s_p, data};
};

const columns = [
	{
		field: "",
		headerName: "*",
		width: 10
	},
	{
		field: "name",
		headerName: "Name",
		width: 100
	},
	{
		field: "rank",
		headerName: "Rank",
		align: "center",
		width: 110
	},
	{
		field: "w",
		headerName: "W",
		align: "center",
		width: 110
	},
	{
		field: "s_p",
		headerName: "S/P",
		align: "center",
		width: 110
	},	...data_head
];

const rows = [
	createData(1, "test", "test", "test", "test", data),
	createData(2, "test", "test", "test", "test", data),
	createData(3, "test", "test", "test", "test", data),
	createData(4, "test", "test", "test", "test", data),
	createData(5, "test", "test", "test", "test", data),
];



function BodyContent(props) {
	const history = useHistory();
	const classes = useStyles();

	function handleClick(row) {
		history.push(`/crew/edit/${row.id}/personal-details`);
	}

	console.log(rows);
	return <React.Fragment>
		<Grid container spacing={1} className="h-full w-full flex">
			<Grid item xs={12} className="flex w-full">
				<HeaderContent />
			</Grid>		
			<Grid item xs={12} className="md:flex h-screen max-h-lg">				
				<Grid item xs={12} className="block">			
					<TableContainer component={Paper} className="mb-4" style={{height: 'calc(100% - 100px)'}}>
						<TableSchedule rows={rows} columns={columns}/>
					</TableContainer>	
					<div className="w-full px-16 py-8 block" style={{height: 100}}>
						<Typography >
							Working Arrangements: 
						</Typography>
						<Typography >
							Working Hours per day: 0
						</Typography>
					</div>
				</Grid>
			</Grid>	
		</Grid>
	</React.Fragment>
}

export default BodyContent;
