import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
	import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import React, {

} from 'react';


const useStyles = makeStyles(theme => ({
	
}));

const rows = [
	{
		title: "Documents",
		data: [
			{
				certificate: "Passport",
				s: "Y",
				number: "566359",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			},
			{
				certificate: "SBK",
				s: "Y",
				number: "CTB123",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			}
		]
	},
	{
		title: "National License",
		data: [
			{
				certificate: "Passport",
				s: "Y",
				number: "566359",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			},
			{
				certificate: "Passport",
				s: "Y",
				number: "566359",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			},
			{
				certificate: "Passport",
				s: "Y",
				number: "566359",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			}
		]
	},
	
];

function BodyContent(props) {
	const classes = useStyles(props);
	const cellAlign = "left";

	return <>
		<TableContainer component={Paper} >
			<Table className={classes.table} size="small">
				<TableHead>
					<TableRow>
						<TableCell ></TableCell>
						<TableCell align={cellAlign}>
							Certification
						</TableCell>
						<TableCell align={cellAlign}>S</TableCell>
						<TableCell align={cellAlign}>Number</TableCell>
						<TableCell align={cellAlign}>Issued</TableCell>
						<TableCell align={cellAlign}>Expired</TableCell>
						<TableCell align={cellAlign}>Issue Country</TableCell>
						<TableCell align={cellAlign}>OnVSL</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						rows && rows.map((row, index) => 
						<React.Fragment key={index}>
							<TableRow>
								<TableCell colSpan={8}>:{`${index + 1}.${row.title}`}</TableCell>
							</TableRow>
							{
								row.data.map((d, i) =>
									<TableRow key={i}>
										{i == 0 && 
										<TableCell rowSpan={row.data.length} align={cellAlign} ></TableCell>}
										<TableCell align={cellAlign}>{d.certificate}</TableCell>
										<TableCell align={cellAlign}>{d.s}</TableCell>
										<TableCell align={cellAlign}>{d.number}</TableCell>
										<TableCell align={cellAlign}>{d.issued}</TableCell>
										<TableCell align={cellAlign}>{d.expired}</TableCell>
										<TableCell align={cellAlign}>{d.issue_country}</TableCell>
										<TableCell align={cellAlign}><Checkbox size="small" /> </TableCell>
									</TableRow>)
							}
						</React.Fragment>)
					}
				</TableBody> 
			</Table>
		</TableContainer>
	</>;
}

export default BodyContent;
