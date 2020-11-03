import React, {  } from 'react';
import { useHistory } from "react-router-dom";
import HeaderContent from './HeaderContent';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { Grid, Typography, TableCell, Table, TableRow, TableBody, TableHead, Container, Button, IconButton } from "@material-ui/core";
import TableVesselOperation from "./TableVesselOperation";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowRight, ArrowForwardIos, DoubleArrow, ArrowBackIos } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	tablerow: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}));

const createData = (id, description, color, notes, aa) => {
    return {id, description, color, notes, aa};
}

const columns = [
	{
		field: "description",
		headerName: "Description"
	},
	{
		field: "color",
		headerName: "Color",
		align: "left"
	},
	{
		field: "notes",
		headerName: "Notes",
		align: "left"
	},
	{
		field: "aa",
		headerName: "AA",
		align: "right"
	},
];

const rows = [
	createData(1, "test", "red", "test", "test"),
	createData(2, "test", "blue", "test", "test"),
	createData(3, "test", "blue", "test", "test"),
	createData(4, "test", "blue", "test", "test"),
	createData(5, "test", "blue", "test", "test"),
	createData(6, "test", "blue", "test", "test"),
	createData(7, "test", "blue", "test", "test"),
	createData(8, "test", "blue", "test", "test"),
	createData(9, "test", "blue", "test", "test"),
	createData(10, "test", "blue", "test", "test"),
	createData(11, "test", "blue", "test", "test"),
	createData(12, "test", "blue", "test", "test"),
	createData(13, "test", "blue", "test", "test"),
	createData(14, "test", "blue", "test", "test"),
	createData(15, "test", "blue", "test", "test"),
	createData(16, "test", "blue", "test", "test"),
];

const rank_rows = [
	"MASTER",
	"CHIEF OFFICER",
	"2ND OFFICER",
	"3RD OFFICER",
	"4TH OFFICER",
	"CHIEF ENGINEER",
	"2ND ENGINEER",
	"3RD ENGINEER",
	"4TH ENGINEER",
	"ETO",
];

function BodyContent(props) {
	const history = useHistory();
	const classes = useStyles();

	function handleClick(row) {
		history.push(`/crew/edit/${row.id}/personal-details`);
	}
	return <React.Fragment>
		<Grid container spacing={2} className="h-full w-full">	
			<Grid item xs={12} md={6} className="flex">
				<TableContainer component={Paper} className="">
					<TableVesselOperation rows={rows} columns={columns} />
				</TableContainer>
			</Grid>	
			<Grid item xs={12} md={6} className="flex">
				<TableContainer component={Paper} className="flex">
					<TableContainer className="w-full">
						<Table>
							<TableHead>
								<TableRow>
									<TableCell className="p-6 border border-gray-200" align="center">Ranks</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									rank_rows && rank_rows.map((row, index)=>
									<TableRow key={index} hover className={classes.tablerow}>
										<TableCell className="p-6 border border-gray-200" >row</TableCell>
									</TableRow>)
								}
							</TableBody>
						</Table>
					</TableContainer>
					<div className="flex flex-wrap p-16">
						<div className="w-full flex items-end">
							<div className="w-full">
								<div className="justify-center w-full flex">
									<IconButton>
										<ArrowForwardIos />
									</IconButton>	
								</div>	
								<div className="w-full justify-center flex">
									<IconButton>
										<DoubleArrow />
									</IconButton>
								</div>
							</div>			
						</div>
						<div className="w-full">
							<div className="w-full">
								<div className="justify-center w-full flex">
									<IconButton>
										<ArrowForwardIos style={{transform: "scaleX(-1)"}} />
									</IconButton>	
								</div>	
								<div className="w-full justify-center flex">
									<IconButton>
										<DoubleArrow style={{transform: "scaleX(-1)"}} />
									</IconButton>
								</div>
							</div>			
						</div>
					</div>
					<TableContainer className="w-full">
						<Table>
							<TableHead>
								<TableRow>
									<TableCell className="p-6 border border-gray-200" align="center">Assigned Ranks</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									rank_rows && rank_rows.map((row, index)=>
									<TableRow key={index} hover className={classes.tablerow}>
										<TableCell className="p-6 border border-gray-200" >row</TableCell>
									</TableRow>)
								}
							</TableBody>
						</Table>
					</TableContainer>
				</TableContainer>
			</Grid>
		</Grid>
	</React.Fragment>
}

export default BodyContent;
