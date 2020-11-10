import { DataGrid} from "@material-ui/data-grid";
import React, {  } from 'react';
import { useHistory } from "react-router-dom";
import HeaderContent from './HeaderContent';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { useSelector, useDispatch } from "react-redux";
import { setCrew } from "../store/crewSlice";
  
function createData( id, m, last_name, fist_name, father, mother, age, lic_rank, nationality, birthdate, av_from, av_to, last_rank, vessel, status, action ) {
	return { id, m, last_name, fist_name, father, mother, age, lic_rank, nationality, birthdate, av_from, av_to, last_rank, vessel, status, action };
}

const columns = [
	{ field: 'id', headerName: 'ID' },
	{ field: 'm', headerName: 'M' },
	{ field: 'LAST_NAME', headerName: 'Last name', width: 130 },
	{ field: 'FIRST_NAME', headerName: 'First name', width: 130 },
	{ field: 'FATHER_NAME', headerName: 'Father', width: 130 },
	{ field: 'MOTHER_NAME', headerName: 'Mother', width: 130 },
	{ field: 'age', headerName: 'Age', width: 130 },
	{ field: 'RANK_CODE', headerName: 'Lic Rank', width: 130 },
	{ field: 'NAT_CODE', headerName: 'Nationality', width: 130 },
	{ field: 'BIRTH_DATE', headerName: 'Birthdate', width: 130 },
	{ field: 'AV_FROM', headerName: 'Av.From', width: 130 },
	{ field: 'AV_TO', headerName: 'Av.to', width: 130 },
	{ field: 'last_rank', headerName: 'Last Rank', width: 130 },
	{ field: 'vessel', headerName: 'Vessel', width: 130 },
	{ field: 'status', headerName: 'Status', width: 130 },
  ];
  

function BodyContent(props) {
	const history = useHistory();
	const rows = useSelector(state => state.crewApp.crew.list);
	const dispatch = useDispatch();

	function handleClick(event) {
		dispatch(setCrew(event.data));
	}

	return <>
	 	<HeaderContent />		 
		<TableContainer component={Paper} className="overflow-hidden overflow-x-auto">
			<div style={{width: '100%', height: 600}}>
				<DataGrid 
					rows={rows} 
					columns={columns} 
					onRowClick={event => handleClick(event)} 
					rowHeight={25}
				/>
			</div>
		</TableContainer>		
	</>;
}

export default BodyContent;
