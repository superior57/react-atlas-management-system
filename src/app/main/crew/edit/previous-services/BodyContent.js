import { makeStyles } from '@material-ui/core/styles';
import React, {} from 'react';
import { DataGrid } from "@material-ui/data-grid";
import Button from '@material-ui/core/Button';
import { Edit } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { DialogTitle, Dialog, DialogContent, DialogContentText, DialogActions, TableContainer, Container, Paper } from '@material-ui/core';
import { openDialog, closeDialog } from 'app/store/fuse/dialogSlice';
import { AppBar, Toolbar, Typography, TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import clsx from "clsx";

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

function createData(id, manager,vessel,vessel_type,rank,departure,s_on,s_off,repatriation,s_off_reason) {
	return {id, manager,vessel,vessel_type,rank,departure,s_on,s_off,repatriation,s_off_reason};
}


  
const rows = [
	createData(0, "manager","vessel","vessel_type","rank","departure","s_on","s_off","repatriation",'s_off_reason'),
];


function BodyContent(props) {
	const classes = useStyles(props);
	const dispatch = useDispatch();
	

	
	function isEmpty(value) {
		return value ? value : "";
	}

	const contentsLeft = [
		{
			type: "text",
			label: "Vessel",			
		},
		{
			type: "select",
			label: "Vessel Type",
			children: [
				"Type 1", 
				"Type 2",				
			]
		},
		{
			type: "select",
			label: "Engine Type",
			children: [
				"Type 1", 
				"Type 2",				
			]
		},		
		{
			type: "select",
			label: "Vessel Flag",
			children: [
				"Type 1", 
				"Type 2",				
			]
		},
		{
			type: "text",
			label: "Vessel NRT",			
		},
		{
			type: "text",
			label: "Vessel GRT",			
		},
		{
			type: "text",
			label: "Vessel DWT",			
		},
	];

	const contentsRight = [
		{
			type: "text",
			label: "Manager",			
		},
		{
			type: "text",
			label: "Agency",			
		},
		{
			type: "select",
			label: "Rank",
			children: [
				"Type 1", 
				"Type 2",				
			]
		},
		{
			type: "date",
			label: "Departure Date",
			children: [
				"Type 1", 
				"Type 2",				
			]
		},		
		{
			type: "date",
			label: "S/On Date",
			children: [
				"Type 1", 
				"Type 2",				
			]
		},
		{
			type: "text",
			label: "S/On Place"
		},
		{
			type: "date",
			label: "S/Off Date",
			children: [
				"Type 1", 
				"Type 2",				
			]
		},
		{
			type: "date",
			label: "Repartiation Date",
			children: [
				"Type 1", 
				"Type 2",				
			]
		},
		{
			type: "text",
			label: "S/Off Place",			
		},
		{
			type: "text",
			label: "S/Off Reason",			
		},
	];
	const EditContent = (props) => {
		const [state, setState] = React.useState({
			test: "123"
		});
		const handleChange = (e) => {
			setState({
				...state,
				[e.target.name]: e.target.value
			});
		}

		const Contents = (content, index, contentId) => {
			switch (content.type) {
				case 'text' : return (
					<TextField 
						variant="outlined"
						label={content.label}
						className="w-full mb-16 mr-5"
						size="small"
						key={index}	
						value={isEmpty(state[`${contentId}_text_${index}`])}	
						name={`${contentId}_text_${index}`}	
						onChange={handleChange}
					/>)
				case 'select' : return (
					<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-16")} size="small" key={index}>
						<InputLabel id={`select-label-${index}`}>{content.label}</InputLabel>
						<Select
							labelId={`select-label-${index}`}
							value={isEmpty(state[`${contentId}_select_${index}`])}
							onChange={handleChange}
							label={content.label}
							name={`${contentId}_select_${index}`}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{
								content.children.map((item, i) => <MenuItem value={i+1} key={i}>{item}</MenuItem>)
							}
						</Select>
					</FormControl>)
				case 'date' : return (
					<TextField 
						variant="outlined"
						label={content.label}
						className="w-full mb-16 mr-5"
						size="small"
						key={index}	
						value={isEmpty(state[`${contentId}_date_${index}`])}	
						name={`${contentId}_date_${index}`}	
						onChange={handleChange}
						type="date"
						InputLabelProps={{
							shrink: true,
						}}
					/>)
			};
		};

		return (
			<React.Fragment>
				{
					state && (
						<Grid container spacing={1}  style={{ minWidth: '50rem' }}>
					<Grid item xs={6}>
						{
							contentsLeft && contentsLeft.map((content, index) => Contents(content, index, "left"))
						}						
					</Grid>
					<Grid item xs={6}>
						{
							contentsRight && contentsRight.map((content, index) => Contents(content, index, "rigth"))
						}						
					</Grid>
				</Grid>
					)
				}
			</React.Fragment>)
	}

	const handleEdit = (event) => {
		dispatch(openDialog({
			children: (
				<React.Fragment>
					<AppBar position="static" elevation={1}>
						<Toolbar className="flex w-full">
							<Typography variant="subtitle1" color="inherit">
								Edit Previous Services
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
		{ field: 'manager', headerName: 'Manager', width: 130 },
		{ field: 'vessel', headerName: 'First name', width: 130 },
		{ field: 'vessel_type', headerName: 'Vessel Type', width: 130 },
		{ field: 'rank', headerName: 'Rank', width: 130 },
		{ field: 'departure', headerName: 'Departure', width: 130 },
		{ field: 's_on', headerName: 'S/On', width: 130 },
		{ field: 's_off', headerName: 'S/Off', width: 130 },
		{ field: 'repatriation', headerName: 'Repatriation', width: 130 },
		{ field: 's_off_reason', headerName: 'S/Off Reason', width: 130 },
		{
			field: 'action',
			headerName: "Action",
			width: 130,
			renderCell: (param)=>{
				return <Button  variant="contained" onClick={event => handleEdit(event)} >
							<Edit />
					</Button>
			}
		}
	  ];

	return <TableContainer component={Paper} style={{ height: '100%', width: '100%' }}>
			<DataGrid rows={rows} columns={columns} rowHeight={25}/>
		</TableContainer>
}

export default BodyContent;
