import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from "@material-ui/data-grid";
import { Container, Paper, TableContainer, Button, AppBar, Toolbar, Typography, DialogContent, DialogActions } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openDialog, closeDialog } from "app/store/fuse/dialogSlice";
import EditContent from "./EditContent";


// const useStyles = makeStyles(theme => ({
// 	layoutRoot: {},
// 	textField: {
// 		width: "100%",
// 		marginRight: ".5rem",
// 	},
// 	formControl: {
// 		minWidth: 120,
// 	},
// 	spacingBottom: {
// 		marginBottom: "2rem"
// 	},
// 	dateField: {
// 		marginLeft: theme.spacing(1),
// 		marginRight: theme.spacing(1),
// 		width: 200,
// 	},
// }));

const createData = (id, vessel, rank, agent, departure, s_on, s_off, repatriation, s_off_port, s_off_reason, coe) => {
	return {id, vessel, rank, agent, departure, s_on, s_off, repatriation, s_off_port, s_off_reason, coe};
};

function BodyContent(props) {
	// const classes = useStyles(props);
	const dispatch = useDispatch();

	const handleEdit = (event, param) => {
		console.log(param);
		dispatch(openDialog({
			children: (
				<React.Fragment>
					<AppBar position="static" elevation={1}>
						<Toolbar className="flex w-full">
							<Typography variant="subtitle1" color="inherit">
								Edit Company Previous Services
							</Typography>
						</Toolbar>
					</AppBar>
					<DialogContent>
						<EditContent />
					</DialogContent>
					<DialogActions>
						<Button onClick={()=> dispatch(closeDialog())} variant="contained" className="text-white bg-green-400 hover:bg-green-500">
							Save
						</Button>
						<Button onClick={()=> dispatch(closeDialog())} variant="contained" className="text-white bg-red-400 hover:bg-red-500">
							Cancel
						</Button>
					</DialogActions>
				</React.Fragment>
				 )
			 }))		
	}	
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
		{
			field: "action",
			headerName: "Action",
			width: 130,
			renderCell: (param) =>{
				return <React.Fragment>
					<Button  variant="contained" onClick={event => handleEdit(event, param)} >
						<Edit />
					</Button>
				</React.Fragment>
			}
		}
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
			/>
		</TableContainer>
	</React.Fragment>
}

export default BodyContent;
