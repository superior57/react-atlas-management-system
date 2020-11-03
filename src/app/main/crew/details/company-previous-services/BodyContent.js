import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from "@material-ui/data-grid";
import { Container, Paper, TableContainer, Button, AppBar, Toolbar, Typography, DialogContent, DialogActions } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openDialog, closeDialog } from "app/store/fuse/dialogSlice";
import EditContent from "./EditContent";


const createData = (id, vessel, rank, agent, departure, s_on, s_off, repatriation, s_off_port, s_off_reason, coe) => {
	return {id, vessel, rank, agent, departure, s_on, s_off, repatriation, s_off_port, s_off_reason, coe};
};

function BodyContent(props) {
	const columns = [
		{
			field: "vessel",
			headerName: "Vessel",
			width: 130
		},
		{
			field: "rank",
			headerName: "Rank",
			width: 130
		},	
		{
			field: "agent",
			headerName: "Agent",
			width: 130
		},	
		{
			field: "departure",
			headerName: "Departure",
			width: 130
		},	
		{
			field: "s_on",
			headerName: "S/On",
			width: 130
		},	
		{
			field: "s_off",
			headerName: "S/Off",
			width: 130
		},	
		{
			field: "repatriation",
			headerName: "Repatriation",
			width: 130
		},		
		{
			field: "s_off_port",
			headerName: "S/Off Port",
			width: 130
		},	
		{
			field: "s_off_reason",
			headerName: "S/Off Reason",
			width: 130
		},	
		{
			field: "coe",
			headerName: "COE",
			width: 130
		},
	];
	const rows = [
		createData(0, "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test"),
	];
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
