import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from "@material-ui/data-grid";
import { Container, Paper, TableContainer, Button, AppBar, Toolbar, Typography, DialogContent, DialogActions } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openDialog, closeDialog } from "app/store/fuse/dialogSlice";
import EditContent from "./EditContent";



const createData = (id, name, relation, bank, bank_account, amount) => {
	return {id, name, relation, bank, bank_account, amount};
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
				 ),
				classes: {
					paper: 'max-w-full rounded-8'
				}
			 }))		
	}	
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
		createData(0, "Test", "Test", "Test", "Test", "Test"),
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
