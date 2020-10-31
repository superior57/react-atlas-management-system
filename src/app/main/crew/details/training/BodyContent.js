import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from "@material-ui/data-grid";
import { Container, Paper, TableContainer, Button, AppBar, Toolbar, Typography, DialogContent, DialogActions, Grid } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openDialog, closeDialog } from "app/store/fuse/dialogSlice";
import EditContent from "./EditContent";



const createData = (id, course_no, course_description, date, total_score, total_cmpl, notes) => {
	return {id, course_no, course_description, date, total_score, total_cmpl, notes};
};

function BodyContent(props) {
	// const classes = useStyles(props);
	const dispatch = useDispatch();

	const handleEdit = (event, param) => {
		dispatch(openDialog({
			children: (
				<React.Fragment>
					<div className="" style={{ maxWidth: '900px' }}>

					<AppBar position="static" elevation={1}>
						<Toolbar className="flex w-full">
							<Typography variant="subtitle1" color="inherit">
								Edit Appraisals
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
					</div>
				</React.Fragment>
				 )
			 }))		
	}	
	const columns = [
		{
			field: "course_no",
			headerName: "Course No",
			width: 130
		},
		{
			field: "course_description",
			headerName: "Course Description",
			width: 230
		},
		{
			field: "date",
			headerName: "Date",
			width: 130
		},
		{
			field: "total_score",
			headerName: "Total Score",
			width: 200
		},
		{
			field: "total_cmpl",
			headerName: "Total Cmpl",
			width: 200
		},
		{
			field: "notes",
			headerName: "Notes",
			width: 200
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
		createData(0, "Test", "Test", "Test", "Test", "Test", "Test"),
	];
	return <React.Fragment>
		<Grid container spacing={1} className="h-full">
			<Grid item xs={12} md={7} className="w-full flex">
				<TableContainer component={Paper} className="w-full overflow-hidden">
					<DataGrid 
						rows={rows}
						columns={columns}		
						rowHeight={25}
						hideFooter	
					/>
				</TableContainer>
			</Grid>
			<Grid item xs={12} md={5} className="w-full flex flex-wrap">				
				<TableContainer component={Paper} className="h-full overflow-hidden">
					<Typography variant="subtitle1" align="center">
						Compliance
					</Typography>
					<DataGrid 
						rows={[]}
						columns={[
							{
								field: "course",
								headerName: "Counrse",
								width: 130
							},
							{
								field: "date",
								headerName: "Date",
								width: 130
							},
							{
								field: "score",
								headerName: "Score",
								width: 130
							},
						]}		
						rowHeight={25}	
						hideFooter
					/>
				</TableContainer>
			</Grid>
		</Grid>
	</React.Fragment>
}

export default BodyContent;
