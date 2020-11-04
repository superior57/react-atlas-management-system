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

function createData(id, description, abrv, order) {
	return {id, description, abrv, order};
}

const columns = [
	{ field: 'description', headerName: 'Description', width: 500 },
	{ field: 'abrv', headerName: 'Abrv', width: 200 },
	{ field: 'order', headerName: 'Order', width: 200 },
  ];
  
const rows = [
	createData(1, "test", "test", "test"),
];


function BodyContent(props) {
	const classes = useStyles(props);

	return <TableContainer component={Paper} style={{ height: '100%', width: '100%' }}>
			<DataGrid rows={rows} columns={columns} rowHeight={25} checkboxSelection showCellRightBorder showColumnRightBorder />
		</TableContainer>
}

export default BodyContent;
