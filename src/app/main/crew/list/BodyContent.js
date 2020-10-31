import { DataGrid} from "@material-ui/data-grid";

import React, {  } from 'react';
import { useHistory } from "react-router-dom";
import HeaderContent from './HeaderContent';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { Grid, Typography } from "@material-ui/core";


  
function createData( id, num, last_name, first_name, nationality, age, last_rank, wage, status, departure, s_on_date, months_onb, s_off_date, s_off_port, s_off_reason ) {
	return { id, num, last_name, first_name, nationality, age, last_rank, wage, status, departure, s_on_date, months_onb, s_off_date, s_off_port, s_off_reason };
}

const columns = [
	{ field: 'num', headerName: '' },
	{ field: 'id', headerName: 'Id' },
	{ field: 'last_name', headerName: 'Lastname', width: 130 },
	{ field: 'first_name', headerName: 'Firstname', width: 130 },
	{ field: 'nationality', headerName: 'Nationality', width: 130 },
	{ field: 'age', headerName: 'Age', width: 130 },
	{ field: 'last_rank', headerName: 'Last Rank', width: 130 },
	{ field: 'wage', headerName: 'Wage', width: 130 },
	{ field: 'status', headerName: 'Status', width: 130 },
	{ field: 'departure', headerName: 'Departure', width: 130 },
	{ field: 's_on_date', headerName: 'S/On Date', width: 130 },
	{ field: 'months_onb', headerName: 'Months ONB', width: 130 },
	{ field: 's_off_date', headerName: 'S/Off Date', width: 130 },
	{ field: 's_off_port', headerName: 'S/Off Port', width: 130 },
	{ field: 's_off_reason', headerName: 'S/Off Reason', width: 130 },
  ];
  
const rows = [
	createData(1, "1001", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test")
];

function BodyContent(props) {
	const history = useHistory();

	function handleClick(row) {
		history.push(`/crew/edit/${row.id}/personal-details`);
	}
	return <React.Fragment>
		<Grid container spacing={2} className="h-full w-full flex">
			<Grid item xs={12} className="flex w-full">
				<HeaderContent />
			</Grid>		
			<Grid item xs={12} className="flex h-screen max-h-sm">
				<TableContainer component={Paper} className="">
					<DataGrid 
						rows={rows} 
						columns={columns} 
						onRowClick={event => handleClick(event.rowModel)} 
						rowHeight={25}
						className="shadow-2xl"
					/>
				</TableContainer>
			</Grid>	
			<Grid item xs={12}>
				<TableContainer component={Paper}  className="flex justify-center p-16 ">
					<div className="flex justify-between">
						<div className="flex justify-center w-full">
							<Typography className="px-8 py-4 bg-gray-200 mr-24">35.33</Typography>
						</div>
						<div className="flex justify-center w-full">
							<Typography className="px-8 py-4 bg-gray-200 mr-24">35.33</Typography>
						</div>
						<div className="flex justify-center w-full">
							<Typography className="px-8 py-4 bg-gray-200 mr-24">35.33</Typography>
						</div>						
					</div>
				</TableContainer>
			</Grid>	
		</Grid>
	</React.Fragment>
}

export default BodyContent;
