import { makeStyles } from '@material-ui/core/styles';
import React, {} from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { TableContainer, Paper, Checkbox, Grid } from '@material-ui/core';

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
	{ field: 'description', headerName: 'Description', width: 250, headerAlign: "center" },
	{ field: 'abrv', headerName: 'Abrv', width: 130, headerAlign: "center" },
	{ field: 'order', headerName: 'Order', width: 130, headerAlign: "center", align: "right" },
	{ 
		field: 'optional_cert_stcw', 
		headerName: 'Optional Certificate More than STCW', 
		width: 200, 
		headerAlign: "center",
		align: "center",
		renderCell: (params)=> {
			return <div className="w-full justify-center">
				<Checkbox color="secondary" />
			</div>
		},
	},
	{
		field: 'kpi_stcw', 
		headerName: 'KPI (STCW)', 
		width: 200, 
		headerAlign: "center",
		align: "center",
		renderCell: (params)=> {
			return <div className="w-full justify-center">
				<Checkbox color="secondary" />
			</div>
		},
	}
  ];
  
const rows = [
	createData(1, "test", "test", "test"),
];

const columns_category = [
	{
		field: "description",
		headerName: "Description",
		headerAlign: "center",
		width: 200
	}
]

const rows_category = [
	{ id: 1, description: "test" },
	{ id: 2, description: "test" },
	{ id: 3, description: "test" },
	{ id: 4, description: "test" },
	{ id: 5, description: "test" },
	{ id: 6, description: "test" },
]


function BodyContent(props) {
	const classes = useStyles(props);

	return <Grid container spacing={1} className="h-full w-full">
		<Grid item xs={12} md={3} className="flex">
			<Paper className="w-full">
				<DataGrid rows={rows_category} columns={columns_category} rowHeight={25} hideFooter />
			</Paper>
		</Grid>
		<Grid item xs={12} md={9} className="flex">
			<Paper className="w-full">
				<DataGrid rows={rows} columns={columns} rowHeight={25} checkboxSelection showCellRightBorder showColumnRightBorder />
			</Paper>
		</Grid>
	</Grid>
}

export default BodyContent;
