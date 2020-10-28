import { makeStyles } from '@material-ui/core/styles';
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
}));

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

	const classes = useStyles(props);
	return <>
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<div className="flex mb-20">
					<TextField
						required
						label="Last Name"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<TextField
						label="Middle Name"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}		
					/>
				</div>
				<div className="flex mb-20">
					<TextField
						required
						label="First Name"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<div className="w-full">
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel id="sex-label">Sex</InputLabel>
							<Select
							labelId="sex-label"
							value={state.sex}
							onChange={(e) => {
								setState({
									...state,
									sex: e.target.value
								});
							}}
							label="Sex"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Man</MenuItem>
							<MenuItem value={2}>Woman</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
				<div className="flex mb-20">
					<TextField						
						label="Father Name"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<TextField
						label="Mother Name"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}		
					/>
				</div>
				<div className="flex mb-20">
					<TextField						
						label="Wife's Name"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<TextField
						label="No of Childs"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}		
					/>
				</div>
				<div className="flex mb-20">
					<TextField						
						label="Birth Date"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<TextField
						label="Birth Place"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}		
					/>
				</div>
				<div className="flex mb-20">
					<TextField						
						label="Telephone 1"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<TextField
						label="Telephone 2"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}		
					/>
				</div>
				<div className="flex mb-20">
					<TextField						
						label="Fax"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<TextField
						label="Skype"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}		
					/>
				</div>
				<div className="flex mb-20">
					<TextField						
						label="Mobile 1"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<TextField
						label="Mobile 2"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}		
					/>
				</div>
				<div className="flex mb-20">
					<TextField						
						label="Email 1"
						defaultValue=""
						variant="outlined"		
						className={classes.textField}
					/>
					<TextField
						label="Email 2"
						defaultValue=""
						variant="outlined"	
						className={classes.textField}		
					/>
				</div>
				<div className="flex mb-20">
					<TextField
						label="Home Address"
						multiline
						rows={3}
						defaultValue=""
						variant="outlined"
						className={classes.textField}
					/>
				</div>
				<div className="flex mb-20">
					<TextField
						label="Temporary Address"
						multiline
						rows={3}
						defaultValue=""
						variant="outlined"
						className={classes.textField}
					/>
				</div>
				<div className="flex mb-20">
					<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5")}>
						<InputLabel id="country-label">Country</InputLabel>
						<Select
							labelId="country-label"
							value={state.country}
							onChange={(e) => {
								setState({
									...state,
									country: e.target.value
								});
							}}
							label="Country"
						>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>United States</MenuItem>
						<MenuItem value={2}>China</MenuItem>
						<MenuItem value={3}>Greece</MenuItem>
						</Select>
					</FormControl>
					<div className="w-full mr-5"></div>
				</div>
				<div className="flex mb-20">
					<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5")}>
						<InputLabel id="nearest-port-label">Nearest Port</InputLabel>
						<Select
							labelId="nearest-port-label"
							value={state.nearest_port}
							onChange={(e) => {
								setState({
									...state,
									nearest_port: e.target.value
								});
							}}
							label="Nearest Port"
						>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>Port 1</MenuItem>
						<MenuItem value={2}>Port 2</MenuItem>
						<MenuItem value={3}>Port 3</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label="Nearest Airport"
						defaultValue=""
						variant="outlined"	
						className={classes.textField}		
					/>
				</div>
			</Grid>
			<Grid item xs={12} md={6}>
				<div className="flex">
					<div className="w-full flex-wrap">
						<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")}>
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
						<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")}>
							<InputLabel id="nation-label">Nation</InputLabel>
							<Select
								labelId="nation-label"
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
							<MenuItem value={1}>Nation 1</MenuItem>
							<MenuItem value={2}>Nation 2</MenuItem>
							<MenuItem value={3}>Nation 3</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")}>
							<InputLabel id="religion-label">Religion</InputLabel>
							<Select
								labelId="religion-label"
								value={state.religion}
								onChange={(e) => {
									setState({
										...state,
										religion: e.target.value
									});
								}}
								label="Religion"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Religion 1</MenuItem>
							<MenuItem value={2}>Religion 2</MenuItem>
							<MenuItem value={3}>Religion 3</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")}>
							<InputLabel id="nearest-port-label">Marital Status</InputLabel>
							<Select
								labelId="nearest-port-label"
								value={state.marital_status}
								onChange={(e) => {
									setState({
										...state,
										marital_status: e.target.value
									});
								}}
								label="Marital Status"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Married</MenuItem>
							<MenuItem value={2}>Not yet</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="w-full flex px-20 pb-20 mx-20">
						<div className="bg-white h-100 w-50">

						</div>
					</div>
				</div>
			</Grid>
		</Grid>
	</>;
}

export default BodyContent;
