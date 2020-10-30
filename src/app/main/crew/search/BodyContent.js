import { DataGrid} from "@material-ui/data-grid";

import React, {  } from 'react';
import { useHistory } from "react-router-dom";
import HeaderContent from './HeaderContent';

  
function createData( id, m, last_name, fist_name, father, mother, age, lic_rank, nationality, birthdate, av_from, av_to, last_rank, vessel, status, action ) {
	return { id, m, last_name, fist_name, father, mother, age, lic_rank, nationality, birthdate, av_from, av_to, last_rank, vessel, status, action };
}

const columns = [
	{ field: 'id', headerName: 'ID' },
	{ field: 'm', headerName: 'M' },
	{ field: 'last_name', headerName: 'Last name', width: 130 },
	{ field: 'fist_name', headerName: 'First name', width: 130 },
	{ field: 'father', headerName: 'Father', width: 130 },
	{ field: 'mother', headerName: 'Mother', width: 130 },
	{ field: 'age', headerName: 'Age', width: 130 },
	{ field: 'lic_rank', headerName: 'Lic Rank', width: 130 },
	{ field: 'nationality', headerName: 'Nationality', width: 130 },
	{ field: 'birthdate', headerName: 'Birthdate', width: 130 },
	{ field: 'av_from', headerName: 'Av.From', width: 130 },
	{ field: 'av_to', headerName: 'Av.to', width: 130 },
	{ field: 'last_rank', headerName: 'Last Rank', width: 130 },
	{ field: 'vessel', headerName: 'Vessel', width: 130 },
	{ field: 'status', headerName: 'Status', width: 130 },
	// {
	// 	field: "",
	// 	headerName: "Action",
	// 	disableClickEventBubbling: true,
	// 	renderCell: (params) => {
	// 	  const onClick = (e) => {
	// 		  console.log(e);

	// 	  };
	
	// 	  return <Button variant="contained" onClick={event=>onClick(event)}>Edit</Button>;
	// 	}
	// }

  ];
  
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
	const history = useHistory();

	function handleClick(row) {
		// console.log(row);
		history.push(`/crew/edit/${row.id}/personal-details`);
	}
	return <>
	 	<HeaderContent />
		 <div style={{width: '100%', height: 600}}>
			<DataGrid 
				rows={rows} 
				columns={columns} 
				onRowClick={event => handleClick(event.rowModel)} 
				rowHeight={25}		
			/>
		</div>
	</>;
}

export default BodyContent;
