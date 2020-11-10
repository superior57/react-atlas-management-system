import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React,{ useState } from 'react';
import BodyContent from './BodyContent';
import ToolbarContent from "./ToolbarContent";

import reducer from "./../store";
import withReducer from "app/store/withReducer";


const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function NewPage(props) {
	const classes = useStyles(props);
	const [ state, setState ] = useState({});

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="px-24 flex items-center">
					<h4>New Crew</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<ToolbarContent state={state} setState={setState}/>
				</div>
			}
			content={
				<div className="p-24">
					<BodyContent state={state} setState={setState}/>
				</div>
			}
		/>
	);
}

export default withReducer("crewApp", reducer)(NewPage);
