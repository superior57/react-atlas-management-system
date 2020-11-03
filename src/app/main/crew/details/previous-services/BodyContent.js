import { makeStyles } from '@material-ui/core/styles';
import React, {} from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { TableContainer, Paper } from '@material-ui/core';

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
		marginBottom: "2rem"
	},
	dateField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

function createData(id, manager,vessel,vessel_type,rank,departure,s_on,s_off,repatriation,s_off_reason) {
	return {id, manager,vessel,vessel_type,rank,departure,s_on,s_off,repatriation,s_off_reason};
}

const columns = [
	{ field: 'manager', headerName: 'Manager', width: 130 },
	{ field: 'vessel', headerName: 'First name', width: 130 },
	{ field: 'vessel_type', headerName: 'Vessel Type', width: 130 },
	{ field: 'rank', headerName: 'Rank', width: 130 },
	{ field: 'departure', headerName: 'Departure', width: 130 },
	{ field: 's_on', headerName: 'S/On', width: 130 },
	{ field: 's_off', headerName: 'S/Off', width: 130 },
	{ field: 'repatriation', headerName: 'Repatriation', width: 130 },
	{ field: 's_off_reason', headerName: 'S/Off Reason', width: 130 },
  ];
  
const rows = [
	createData(0, "manager","vessel","vessel_type","rank","departure","s_on","s_off","repatriation",'s_off_reason'),
];


function BodyContent(props) {
	const classes = useStyles(props);

	return <TableContainer component={Paper} style={{ height: '100%', width: '100%' }}>
			<DataGrid rows={rows} columns={columns} rowHeight={25} checkboxSelection/>
		</TableContainer>
}

export default BodyContent;
