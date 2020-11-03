import React, {} from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { Paper, TableContainer } from "@material-ui/core";

const createData = (id, name, relation, bank, bank_account, amount) => {
	return {id, name, relation, bank, bank_account, amount};
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
		field: "bank",
		headerName: "Bank",
		width: 130
	},
	{
		field: "bank_account",
		headerName: "Bank Account",
		width: 200
	},
	{
		field: "amount",
		headerName: "Amount",
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
