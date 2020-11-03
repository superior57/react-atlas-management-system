import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React,{ useState } from 'react';
import BodyContent from './BodyContent';
import LeftSidebarContent from './../LeftSidebarContent';

import ToolbarContent from "./ToolbarContent";
import { openDialog, closeDialog } from "app/store/fuse/dialogSlice";
import { AppBar, Toolbar, Typography, Button, DialogActions, DialogContent } from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
	layoutRoot: {
		header: {
			height: '5rem'
		}
	}
}));

function PersonalDetailsPage(props) {
	const classes = useStyles(props);
	const [ state, setState ] = useState({});

	const [ bodyData, setBodyData ] = useState({});

	const handleEdit = () => {

	}

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="px-24 flex items-center">
					<h4>Edit / View Crew > Personal Details</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<ToolbarContent handleEdit={handleEdit} />
				</div>
			}
			content={
				<div className="p-24">
					<BodyContent state={state} setState={setState}/>
				</div>
			}
			leftSidebarContent={<LeftSidebarContent />}	
		/>
	);
}

export default PersonalDetailsPage;
