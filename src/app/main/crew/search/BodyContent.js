import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import React, {
	useState	
} from 'react';
import { useHistory } from "react-router-dom";

import { 
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from '@material-ui/core';
import clsx from "clsx";
import HeaderContent from './HeaderContent';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	textField: {
		width: "100%",
		marginRight: ".5rem",
	},
	formControl: {
		minWidth: 120,
	},
	table: {
		minWidth: 650,
	},
	marginLeft: {
		marginLeft: '-4px'
	}
}));
  
function createData( id, m, lastname, firstname, father, mother, age, licrank, nationality, birthdate, avfrom, avto, lastrank, vessel, status ) {
	return { id, m, lastname, firstname, father, mother, age, licrank, nationality, birthdate, avfrom, avto, lastrank, vessel, status };
}
  
const rows = [
	createData('100001', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100002', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
	createData('100003', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100004', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
	createData('100005', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100006', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
	createData('100007', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100008', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
	createData('100009', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100010', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
	createData('100011', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100012', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
	createData('100013', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100014', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
	createData('100015', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100016', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
	createData('100017', "ETNK", "ABRAMENKO", "VOLODYMYR", "STANISLAV", "n/a", "68", "MASTER", "Ukraine", "25/08/52", "", "", "MASTER", "MARU", "OFB"),
	createData('100018', "ETNK", "LYKOURIS", "ANTONIOS", "", "", "66", "MASTER", "Greek", "25/09/54", "", "", "MASTER", "URANIA", "OFB"),
];

function BodyContent(props) {
	const [state, setState] = useState({
		sex: "",
		country: "",
		nearest_port: "",
		rank: "",
		nation: "",
		religion: "",
		marital_status: "",
		manning_agent: "",
		only_for_manager: ""
	});
	const history = useHistory();

	const [searchText, setSearchText] = useState('');
	function handleSearchText(event) {
		setSearchText(event.target.value);
	}

	function handleClick(item) {
		console.log(props);
		history.push(`/crew/edit/${item.id}/personal-details`);
	}

	const classes = useStyles(props);
	return <>
	 	<HeaderContent />

		<TableContainer component={Paper} className={classes.marginLeft}>
			<Table className={classes.table} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>M</TableCell>
						<TableCell>Lastname</TableCell>
						<TableCell>Firstname</TableCell>
						<TableCell>Father</TableCell>
						<TableCell>Mother</TableCell>
						<TableCell>Age</TableCell>
						<TableCell>Lic Rank</TableCell>
						<TableCell>Nationality</TableCell>
						<TableCell>Birthdate</TableCell>
						<TableCell>Av.From</TableCell>
						<TableCell>Av.to</TableCell>
						<TableCell>Last Rank</TableCell>
						<TableCell>Vessel</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => (
						<TableRow 
							key={i}
							onClick={event => handleClick(row)}	
							hover					
						>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.m}</TableCell>
							<TableCell>{row.lastname}</TableCell>
							<TableCell>{row.firstname}</TableCell>
							<TableCell>{row.father}</TableCell>
							<TableCell>{row.mother}</TableCell>
							<TableCell>{row.age}</TableCell>
							<TableCell>{row.licrank}</TableCell>
							<TableCell>{row.nationality}</TableCell>
							<TableCell>{row.birthdate}</TableCell>
							<TableCell>{row.avfrom}</TableCell>
							<TableCell>{row.avto}</TableCell>
							<TableCell>{row.lastrank}</TableCell>
							<TableCell>{row.vessel}</TableCell>
							<TableCell>{row.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	</>;
}

export default BodyContent;
