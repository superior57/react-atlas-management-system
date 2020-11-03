import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import _ from "@lodash";

const useStyles = makeStyles(theme => ({
	
}));

const columns = [
	{
		field: "certification",
		headerName: "Certification",
		colSpan: 3,
		width: 200
	},
	{
		field: "s",
		headerName: "S"
	},
	{
		field: "number",
		headerName: "Number"
	},
	{
		field: "issued",
		headerName: "Issued"
	},
	{
		field: "expired",
		headerName: "Expired"
	},
	{
		field: "issue_country",
		headerName: "Issue Country"
	},
	{
		field: "onvsl",
		headerName: "OnVSL"
	},
]

function BodyContent(props) {
	const classes = useStyles(props);
	const cellAlign = "left";
	const {state, setState} = props;

	const handleSelectRow = (e, key, row_index, d_i) => {
		const newValue = e.target.checked;
		setState({
			...state,
			[`selected_${key}`]:{
				...state[`selected_${key}`],
				[`${row_index}_${d_i}`]: newValue
			},
			[`selected_row_index`]: row_index
		});
	};

	return <React.Fragment>
		{
			state && 
			<TableContainer component={Paper} >
			<Table className={classes.table} size="small">
				<TableHead>
					<TableRow>
						{
							columns && columns.map((col, index) => 
							<TableCell colSpan={col.colSpan} align="center" className="p-4 border border-gray-200" key={index} width={col.width}>
								{col.headerName}
							</TableCell>)
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						state.rows && state.rows.map((row, index) => 
						<React.Fragment key={index}>
							<TableRow>
								<TableCell className="p-4" align="left" width="30">
									<Checkbox size="small" />
								</TableCell>
								<TableCell className="p-4 border border-gray-200" colSpan={8}>:{`${index + 1}.${row.title}`}</TableCell>
							</TableRow>
							{
								row.data.map((d, i) =>
									<TableRow hover key={i}>
										<TableCell className="p-4" align="left" width="30">
											<Checkbox size="small" onChange={event => handleSelectRow(event, "row_data", index, i)} checked={state.selected_row_data[`${index}_${i}`] ? state.selected_row_data[`${index}_${i}`] : false} />
										</TableCell>
										{i == 0 && 										
										<TableCell rowSpan={row.data.length} className="p-4 border border-gray-200" align={cellAlign} width={30} ></TableCell>}
										{
											columns && columns.map((col, index) => 
											<React.Fragment key={index}>
												{
													col.field != "onvsl" ? <TableCell className="p-4 border border-gray-200" width={col.width} >{d[`${col.field}`]}</TableCell> :
														<TableCell className="p-4 border border-gray-200" align="center"><Checkbox size="small" /> </TableCell>
												}
											</React.Fragment>)
										}
										
									</TableRow>)
							}
						</React.Fragment>)
					}
				</TableBody> 
			</Table>
		</TableContainer>
		}
	</React.Fragment>
}

export default BodyContent;
