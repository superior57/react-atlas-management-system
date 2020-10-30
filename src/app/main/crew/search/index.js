import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import BodyContent from './BodyContent';
import HeaderContent from './HeaderContent';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function SearchPage(props) {
	const classes = useStyles(props);
	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h4>Search Crew</h4>
				</div>
			}
			// contentToolbar={
			// 	<div className="w-full px-24">
			// 		<HeaderContent />
			// 	</div>
			// }
			content={
				<div className="p-24 h-full">
					<BodyContent />
				</div>
			}
		/>
	);
}

export default SearchPage;
