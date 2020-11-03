import React, {} from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { Paper, TableContainer } from "@material-ui/core";



const createData = (id, vessel, assessment_date, assessor_name, type, employment_status) => {
	return {id, vessel, assessment_date, assessor_name, type, employment_status};
};

const columns = [
	{
		field: "vessel",
		headerName: "Vessel",
		width: 130
	},
	{
		field: "assessment_date",
		headerName: "Assessment Date",
		width: 230
	},
	{
		field: "assessor_name",
		headerName: "Assessor Name",
		width: 230
	},
	{
		field: "type",
		headerName: "Type",
		width: 130
	},
	{
		field: "employment_status",
		headerName: "Employment Status",
		width: 230
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
