import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import SplitButton from './SplitButton'


import React, {
	useState
} from 'react';

import { 
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from '@material-ui/core';
import clsx from "clsx";
import { ClassSharp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	layoutRoot: {},
	textField: {
		width: "100%",
		marginRight: ".5rem",
	},
	formControl: {
		minWidth: 120,
	},
	spacingBottom: {
		marginBottom: "1rem"
	},
	spacingBottomSmall: {
		marginBottom: '0.5rem'
	},
	select: {
		height:40
	},
	noPadding: {
		padding:0,
		minWidth:'15px'
	},
	noTransform: {
		textTransform:"none"
	}
}));



function HeaderContent(props) {
	const [state, setState] = useState({
		sex: "",
		country: "",
		nearest_port: "",
		rank: "",
		nation: "",
		religion: "",
		marital_status: "",
		manning_agent: "",
		only_for_manager: "",
		has_appraisal_as:"",
		prserv_with:"",
		nation:"",
		onlyformanaget:"",
		overalevaluation:"",
		onb_ofb_with:""
	});

	const classes = useStyles(props);
	return <>
	 	<Grid container spacing={2} className={clsx(classes.spacingBottom)}>
			<Grid item xs={12} md={9}>
				<Grid container spacing={1} className="px-10 py-5 bg-white border border-gray-400">
					<Grid item xs={12} md={6}>
						<TextField							
							label="Name"
							defaultValue=""
							variant="outlined"		
							className={clsx(classes.textField, classes.spacingBottom)} 
							size='small'
						/>
						<Grid container spacing={1}>
							<Grid item xs={12} md={6} >
								<div>
									<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5")} size='small'>
										<InputLabel id="rank-label">Rank</InputLabel>
										<Select
											labelId="rank-label"
											value={state.rank}
											onChange={(e) => {
												setState({
													...state,
													rank: e.target.value
												});
											}}
											label="Rank"
											
										>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={1}>Rank 1</MenuItem>
										<MenuItem value={2}>Rank 2</MenuItem>
										<MenuItem value={3}>Rank 3</MenuItem>
										</Select>
									</FormControl>
								</div>
							</Grid>
							<Grid item xs={12} md={6}>
								<div>
									<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5",classes.spacingBottomSmall)} size='small'>
										<InputLabel id="nation">Nation</InputLabel>
										<Select
											labelId="nation"
											value={state.nation}
											onChange={(e) => {
												setState({
													...state,
													nation: e.target.value
												});
											}}
											label="Nation"
										>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={1}>Rank 1</MenuItem>
										<MenuItem value={2}>Rank 2</MenuItem>
										<MenuItem value={3}>Rank 3</MenuItem>
										</Select>
									</FormControl>
								</div>
							</Grid>
						</Grid>
						<Grid container spacing={1}>
							<Grid item xs={12} md={6}>
								
							</Grid>
							<Grid item xs={12} md={6}>
								<div>
									<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5")} size='small'>
										<InputLabel id="onlyformanager">Only for Manager</InputLabel>
										<Select
											labelId="onlyformanager"
											value={state.onlyformanager}
											onChange={(e) => {
												setState({
													...state,
													onlyformanager: e.target.value
												});
											}}
											label="Only for Manager"
											
										>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={1}>Rank 1</MenuItem>
										<MenuItem value={2}>Rank 2</MenuItem>
										<MenuItem value={3}>Rank 3</MenuItem>
										</Select>
									</FormControl>
								</div>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="w-full">
							<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5",classes.spacingBottom)} size='small'>
								<InputLabel id="currentstatus">Current Status</InputLabel>
								<Select
									labelId="currentstatus"
									value={state.currentstatus}
									onChange={(e) => {
										setState({
											...state,
											currentstatus: e.target.value
										});
									}}
									label="Current Status"
									
								>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Rank 1</MenuItem>
								<MenuItem value={2}>Rank 2</MenuItem>
								<MenuItem value={3}>Rank 3</MenuItem>
								</Select>
							</FormControl>
						</div>
						<TextField							
							label="Name"
							defaultValue=""
							variant="outlined"		
							className={clsx(classes.textField, classes.spacingBottom)} 
							size='small'
						/>
						<div className="w-full">
							<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5",classes.spacingBottom)} size='small'>
								<InputLabel id="overalevaluation">Overal Evaluation</InputLabel>
								<Select
									labelId="overalevaluation"
									value={state.overalevaluation}
									onChange={(e) => {
										setState({
											...state,
											overalevaluation: e.target.value
										});
									}}
									label="Overal Evaluation"
									
								>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Rank 1</MenuItem>
								<MenuItem value={2}>Rank 2</MenuItem>
								<MenuItem value={3}>Rank 3</MenuItem>
								</Select>
							</FormControl>
						</div>
					</Grid>
					<Grid item xs={12} md={3}>
						<div className="w-full">
							<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5", classes.spacingBottom)} size='small'>
								<InputLabel id="onb_ofb_with">ONB/OFB with</InputLabel>
								<Select
									labelId="onb_ofb_with"
									value={state.onb_ofb_with}
									onChange={(e) => {
										setState({
											...state,
											onb_ofb_with: e.target.value
										});
									}}
									label="ONB/OFB with"
									
								>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Rank 1</MenuItem>
								<MenuItem value={2}>Rank 2</MenuItem>
								<MenuItem value={3}>Rank 3</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div className="w-full">
							<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5", classes.spacingBottom)} size='small'>
								<InputLabel id="prserv_with">Prserv with</InputLabel>
								<Select
									labelId="prserv_with"
									value={state.prserv_with}
									onChange={(e) => {
										setState({
											...state,
											prserv_with: e.target.value
										});
									}}
									label="Prserv with"
									
								>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Rank 1</MenuItem>
								<MenuItem value={2}>Rank 2</MenuItem>
								<MenuItem value={3}>Rank 3</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div className="w-full">
							<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5")} size='small'>
								<InputLabel id="has_appraisal_as">Has Appraisal as</InputLabel>
								<Select
									labelId="has_appraisal_as"
									value={state.has_appraisal_as}
									onChange={(e) => {
										setState({
											...state,
											has_appraisal_as: e.target.value
										});
									}}
									label="Has Appraisal as"
									
								>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>Rank 1</MenuItem>
								<MenuItem value={2}>Rank 2</MenuItem>
								<MenuItem value={3}>Rank 3</MenuItem>
								</Select>
							</FormControl>
						</div>
					</Grid>
					
				</Grid>
			</Grid>
			<Grid item xs={12} md={3}>
				<SplitButton/>
				
			</Grid>
		</Grid>
	</>;
}

export default HeaderContent;
