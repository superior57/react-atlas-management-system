import React, {} from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { Paper, TableContainer } from "@material-ui/core";

const createData = (id, name, relation, phone, mobile, email) => {
	return {id, name, relation, phone, mobile, email};
};

const columns = [
	{
		field: "name",
		headerName: "Name",
		width: 130
	},
	{
		field: "relation",
		headerName: "Relation",
		width: 130
	},
	{
		field: "phone",
		headerName: "Phone",
		width: 130
	},
	{
		field: "mobile",
		headerName: "Mobile",
		width: 130
	},
	{
		field: "email",
		headerName: "Email",
		width: 200
	},
];
const rows = [
	createData(0, "Test", "Test", "Test", "Test", "Test"),
];

function BodyContent(props) {
	return <React.Fragment>
		<TableContainer component={Paper} className="w-full h-full">
			<DataGrid 
				rows={rows}
				columns={columns}		
				rowHeight={25}
				checkboxSelection	
			/>
		</TableContainer>
	</React.Fragment>
}

export default BodyContent;
