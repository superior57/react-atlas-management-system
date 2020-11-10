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
import { useSelector, useDispatch } from "react-redux";
import { setCertificate } from "../store";

const useStyles = makeStyles(theme => ({
	tableRow: {
		'& selected': {
			backgroundColor: "blue"
		}
	},
	selected: {
		backgroundColor: "blue"
	}
}));

function BodyContent(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const cellAlign = "left";
	const certificates = useSelector(state => state.crewApp.crew_details.certificates.list);
	const [state, setState] = React.useState({
		rows: [],
		selected_row: null,
		selected_row_data: {}
	});

	const columns = [
		{
			field: "certification",
			headerName: "Certification",
			colSpan: 2,
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

	React.useEffect(() => {
		if(certificates) {			
			const c_obj = _.groupBy(certificates, "certificate_details.category.id");
			const c_obj_keys = Object.keys(c_obj)
			const data = c_obj_keys.map(key=>({
				title: c_obj[key][0]['certificate_details']['category']['PCC_DESCR'],
				data: c_obj[key].map(c=>({
					id: c['id'],
					certification: c['certificate_details']['PC_DESCR'],
					s: "Y",
					number: c['CC_NUMBER'],
					issued: c['CC_ISSUED'],
					expired: c['CC_EXPIRED'],
					issue_country: c['country'] ? c['country']['PC_DESCR'] : ""
				}))
			}));
			setState({
				...state,
				rows: data
			})
		}
	}, [certificates]);
	

	const handleSelectRow = (data) => {
		setState({
			...state,
			selected_row: data.id
		});
		const c_recent = certificates.find(item=>item.id==data.id);
		dispatch(setCertificate(c_recent))
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
								<TableCell className="p-4 border border-gray-200" colSpan={9}>:{`${index + 1}.${row.title}`}</TableCell>
							</TableRow>
							{
								row.data.map((d, i) =>
									<TableRow 
										hover key={i} 
										onClick={event => handleSelectRow(d)} 
										selected={state.selected_row == d.id}
										className={classes.tableRow}
									>
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
