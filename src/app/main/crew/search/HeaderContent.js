import { makeStyles } from '@material-ui/core/styles';
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

function isEmpty(value) {
	return value ? value : "";
}

function HeaderContent(props) {
	console.log(props);
	const [state, setState] = useState({});

	const classes = useStyles(props);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}

	return <>
	 	<Grid container spacing={2} className={clsx(classes.spacingBottom)}>
			<Grid item xs={12} md={9}>
				<Grid container spacing={2} className="px-10 py-10 bg-white border border-gray-400 rounded shadow-2xl">
					<Grid item xs={12} md={6}>
						<TextField							
							label="Name"
							variant="outlined"		
							className={clsx(classes.textField, classes.spacingBottom)} 
							size='small'
							value={isEmpty(state.name)}
							name="name"
							onChange={handleChange}
						/>
						<Grid container spacing={1}>
							<Grid item xs={6} md={6} >
								<div>
									<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5")} size='small'>
										<InputLabel id="rank-label">Rank</InputLabel>
										<Select
											labelId="rank-label"
											label="Rank"
											value={isEmpty(state.rank)}
											name="rank"
											onChange={handleChange}											
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
							<Grid item xs={6} md={6}>
								<div>
									<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5",classes.spacingBottomSmall)} size='small'>
										<InputLabel id="nation">Nation</InputLabel>
										<Select
											labelId="nation"
											label="Nation"
											value={isEmpty(state.nation)}
											name="nation"
											onChange={handleChange}
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
							<Grid item xs={6} md={6}>
								
							</Grid>
							<Grid item xs={6} md={6}>
								<div>
									<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5")} size='small'>
										<InputLabel id="onlyformanager">Only for Manager</InputLabel>
										<Select
											labelId="onlyformanager"
											label="Only for Manager"											
											value={isEmpty(state.onlyformanager)}
											name="onlyformanager"
											onChange={handleChange}
											
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
					<Grid item xs={12} md={3} >
						<div className="w-full">
							<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5",classes.spacingBottom)} size='small'>
								<InputLabel id="currentstatus">Current Status</InputLabel>
								<Select
									labelId="currentstatus"
									value={isEmpty(state.currentstatus)}
									onChange={handleChange}
									label="Current Status"
									name="current_status"									
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
							label="SGULL Id"
							variant="outlined"		
							className={clsx(classes.textField, classes.spacingBottom)} 
							size='small'
							value={isEmpty(state.sgull_id)}
							name="sgull_id"
							onChange={handleChange}
						/>
						<div className="w-full">
							<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5",classes.spacingBottom)} size='small'>
								<InputLabel id="overalevaluation">Overal Evaluation</InputLabel>
								<Select
									labelId="overalevaluation"
									value={isEmpty(state.overalevaluation)}
									onChange={handleChange}
									label="Overal Evaluation"
									name="overalevaluation"									
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
									label="ONB/OFB with"									
									value={isEmpty(state.onb_ofb_with)}
									name="onb_ofb_with"
									onChange={handleChange}
									
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
									label="Prserv with"									
									value={isEmpty(state.prserv_with)}
									name="prserv_with"
									onChange={handleChange}
									
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
									label="Has Appraisal as"									
									value={isEmpty(state.has_appraisal_as)}
									name="has_appraisal_as"
									onChange={handleChange}
									
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
