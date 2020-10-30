import { makeStyles } from '@material-ui/core/styles';
import React, {} from 'react';
// import { Table, TableRow } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Button from '@material-ui/core/Button';

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

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{
	  field: 'age',
	  headerName: 'Age',
	  type: 'number',
	  width: 90,
	},
	{
	  field: 'fullName',
	  headerName: 'Full name',
	  description: 'This column has a value getter and is not sortable.',
	  sortable: false,
	  width: 160,
	  valueGetter: (params) =>
		`${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
	},
	{
		field: 'edit',
		headerName: "Edit",
		width: 130,
		renderCell: (param)=>(
			<Button 
				variant="outlined"
				onClick={() => { console.log('onClick'); }}
			>
				Edit
			</Button>
		)
	}
  ];
  
const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


function BodyContent(props) {
	const classes = useStyles(props);

	return <>
		<div style={{ height: '100%', width: '100%' }}>
			<DataGrid rows={rows} columns={columns} rowHeight={25}/>
		</div>
	</>;
}

export default BodyContent;
