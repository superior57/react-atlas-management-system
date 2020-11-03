import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React,{ useState } from 'react';
import BodyContent from './BodyContent';
import LeftSidebarContent from '../LeftSidebarContent';
import ToolbarContent from './ToolbarContent';
import EditContent from "./EditContent";
import { openDialog, closeDialog } from "app/store/fuse/dialogSlice";
import { AppBar, Toolbar, DialogContent, Button, Dialog, DialogActions, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";


const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));


const rows = [
	{
		title: "Documents",
		data: [
			{
				certification: "Passport",
				s: "Y",
				number: "566359",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			},
			{
				certification: "SBK",
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
				certification: "Passport",
				s: "Y",
				number: "566359",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			},
			{
				certification: "Passport",
				s: "Y",
				number: "566359",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			},
			{
				certification: "Passport",
				s: "Y",
				number: "566359",
				issued: "16/03/2004",
				expired: "16/03/2014",
				issue_country: "China",			
			}
		]
	},
	
];

function CertificatesPage(props) {
	console.log(props);
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const [ state, setState ] = useState({
		rows: rows,
		selected_row: {},
		selected_row_data: {}
	});

	const [ bodyData, setBodyData ] = useState({});

	const handleSave = () => {
		console.log(state);
	};
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

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="px-24 flex items-center">
					<h4>Edit / View Crew > Certificates</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24 w-full overflow-x-auto">
					<ToolbarContent handleEdit={handleEdit} />
				</div>
			}
			content={
				<div className="p-24 h-full">
					<BodyContent state={state} setState={setState}/>
				</div>
			}
			leftSidebarContent={<LeftSidebarContent />}			
		/>
	);
}

export default CertificatesPage;
