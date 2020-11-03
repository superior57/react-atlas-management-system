import { makeStyles } from '@material-ui/core/styles';
import React, {

} from 'react';

import { 
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Container,
	Paper,
	TableContainer
} from '@material-ui/core';
import clsx from "clsx";
import {EditableAvatar} from "app/components/Avatar";
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
	spacingBottom: {
		marginBottom: "2rem"
	},
	dateField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	photoUpload: {
		
	}
}));

function isEmpty(value) {
	return value ? value : "";
}

function BodyContent(props) {
	const {state, setState} = props;
	const classes = useStyles(props);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}

	return <Grid container spacing={2}>
		<Grid item xs={12}>
			<TableContainer component={Paper} className="p-16">
				<HeaderContent />
			</TableContainer>
		</Grid>		
		<Grid item xs={12}>
		{
			state && 
			<TableContainer component={Paper} className="p-16">
				<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<div className="flex mb-20">
						<TextField
							required						
							label="Last Name"
							variant="outlined"	
							className={classes.textField}
							value={isEmpty(state.l_name)}					
							onChange={handleChange}		
							name="l_name"
							size="small"			
						/>	
						<TextField
							label="Middle Name"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.m_name)}						
							onChange={handleChange}
							name="m_name"
							size="small"
						/>				
					</div>
					<div className="flex mb-20">
						<TextField
							required
							label="First Name"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.f_name)}						
							onChange={handleChange}
							name="f_name"
							size="small"
						/>
						<div className="w-full">
							<FormControl variant="outlined" className={classes.formControl} size="small">
								<InputLabel id="sex-label">Sex</InputLabel>
								<Select
									labelId="sex-label"
									value={isEmpty(state.sex)}
									onChange={handleChange}
									label="Sex"
									name="sex"
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
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.father_name)}						
							onChange={handleChange}
							name="father_name"
							size="small"
						/>
						<TextField
							label="Mother Name"
							variant="outlined"		
							className={classes.textField}	
							value={isEmpty(state.mother_name)}						
							onChange={handleChange}
							name="mother_name"	
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Wife's Name"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.wife_name)}						
							onChange={handleChange}
							name="wife_name"
							size="small"
						/>
						<TextField
							label="No of Childs"
							variant="outlined"		
							className={classes.textField}		
							type="number"
							value={isEmpty(state.no_child)}						
							onChange={handleChange}
							name="no_child"
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Birth Date"
							variant="outlined"		
							className={classes.textField}
							type="date"
							InputLabelProps={{
								shrink: true,
							}}
							value={isEmpty(state.birthday)}
							onChange={handleChange}
							name="birthday"
							size="small"
						/>
						<TextField
							label="Birth Place"
							variant="outlined"		
							className={classes.textField}		
							value={isEmpty(state.birth_place)}						
							onChange={handleChange}
							name="birth_place"
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Telephone 1"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.tel_1)}						
							onChange={handleChange}
							name="tel_1"
							size="small"
						/>
						<TextField
							label="Telephone 2"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.tel_2)}						
							onChange={handleChange}
							name="tel_2"	
							size="small"	
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Fax"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.fax)}						
							onChange={handleChange}
							name="fax"
							size="small"
						/>
						<TextField
							label="Skype"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.skype)}						
							onChange={handleChange}
							name="skype"	
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Mobile 1"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.mobile_1)}						
							onChange={handleChange}
							name="mobile_1"
							size="small"
						/>
						<TextField
							label="Mobile 2"
							variant="outlined"		
							className={classes.textField}	
							value={isEmpty(state.mobile_2)}						
							onChange={handleChange}
							name="mobile_2"	
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Email 1"
							variant="outlined"		
							className={classes.textField}
							type="email"
							value={isEmpty(state.email_1)}						
							onChange={handleChange}
							name="email_1"
							size="small"
						/>
						<TextField
							label="Email 2"
							variant="outlined"	
							className={classes.textField}	
							type="email"	
							value={isEmpty(state.email_2)}						
							onChange={handleChange}
							name="email_2"
							size="small"
						/>
					</div>
					<div className="flex mb-20 md:pr-40">
						<TextField
							label="Home Address"
							multiline
							rows={3}
							variant="outlined"
							className={classes.textField}
							value={isEmpty(state.home_address)}						
							onChange={handleChange}
							name="home_address"
							size="small"
						/>
					</div>
					<div className="flex mb-20 md:pr-40">
						<TextField
							label="Temporary Address"
							multiline
							rows={3}
							variant="outlined"
							className={classes.textField}
							value={isEmpty(state.temp_address)}						
							onChange={handleChange}
							name="temp_address"
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5")} size="small">
							<InputLabel id="country-label">Country</InputLabel>
							<Select
								labelId="country-label"
								value={isEmpty(state.country)}
								onChange={handleChange}
								label="Country"
								name="country"
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
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5")} size="small">
							<InputLabel id="nearest-port-label">Nearest Port</InputLabel>
							<Select
								labelId="nearest-port-label"
								value={isEmpty(state.nearest_port)}
								onChange={handleChange}
								label="Nearest Port"
								name="nearest_port"
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
							variant="outlined"	
							className={classes.textField}
							value={isEmpty(state.nearest_airport)}						
							onChange={handleChange}
							name="nearest_airport"	
							size="small"
						/>
					</div>
				
				</Grid>
				<Grid item xs={12} md={6}>
				<Grid container>
					<Grid item xs={6} md={7} className="flex flex-wrap md:pr-40">
						<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")} size="small">
							<InputLabel id="rank-label">Rank</InputLabel>
							<Select
								labelId="rank-label"
								value={isEmpty(state.rank)}
								onChange={handleChange}
								label="Rank"
								name="rank"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Rank 1</MenuItem>
							<MenuItem value={2}>Rank 2</MenuItem>
							<MenuItem value={3}>Rank 3</MenuItem>
							</Select>
						</FormControl>
						<FormControl required variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")} size="small">
							<InputLabel id="nation-label">Nation</InputLabel>
							<Select
								labelId="nation-label"
								value={isEmpty(state.nation)}
								onChange={handleChange}
								label="Nation"
								name="nation"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Nation 1</MenuItem>
							<MenuItem value={2}>Nation 2</MenuItem>
							<MenuItem value={3}>Nation 3</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")} size="small">
							<InputLabel id="religion-label">Religion</InputLabel>
							<Select
								labelId="religion-label"
								value={isEmpty(state.religion)}
								onChange={handleChange}
								label="Religion"
								name="religion"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Religion 1</MenuItem>
							<MenuItem value={2}>Religion 2</MenuItem>
							<MenuItem value={3}>Religion 3</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")} size="small">
							<InputLabel id="nearest-port-label">Marital Status</InputLabel>
							<Select
								labelId="nearest-port-label"
								value={isEmpty(state.marital_status)}
								onChange={handleChange}
								label="Marital Status"
								name="marital_status"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Married</MenuItem>
							<MenuItem value={2}>Not yet</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6} md={5} className="md:pr-40 pb-20">
							Photo
						<div className="flex bg-white border border-gray-400 relative" style={{
							width: "20rem",
							height: "22rem"
						}}>
							<EditableAvatar />
						</div>
					</Grid>
					<Grid item xs={7} className="flex">
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")} size="small">
							<InputLabel id="manning-agent-label">Manning Agent</InputLabel>
							<Select
								labelId="manning-agent-label"
								value={isEmpty(state.manning_agent)}
								onChange={handleChange}
								label="Manning Agent"
								name="manning_agent"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Agent 1</MenuItem>
							<MenuItem value={2}>Agent 2</MenuItem>
							</Select>
						</FormControl>	
					</Grid>	
					<Grid item xs={7} className="flex">
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")} size="small">
							<InputLabel id="only-for-manager-label">Only for Manager</InputLabel>
							<Select
								labelId="only-for-manager-label"
								value={isEmpty(state.only_for_manager)}
								onChange={handleChange}
								label="Only for Manager"
								name="only_for_manager"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={1}>Manager 1</MenuItem>
							<MenuItem value={2}>Manager 2</MenuItem>
							</Select>
						</FormControl>	
					</Grid>
					<TextField
						label="Notes"
						multiline
						rows={3}
						variant="outlined"
						className={clsx(classes.textField, classes.spacingBottom)}
						value={isEmpty(state.notes)}						
						onChange={handleChange}
						name="notes"
						size="small"
					/>	
					<TextField
						label="Bank Account"
						multiline
						rows={3}
						variant="outlined"
						className={clsx(classes.textField, classes.spacingBottom)}
						value={isEmpty(state.bank_acc)}						
						onChange={handleChange}
						name="bank_acc"
						size="small"
					/>
					<Grid container spacing={1} className={clsx(classes.spacingBottom)}>
						<Grid item xs={4}>
							<TextField
								label="Availability Period"
								// defaultValue={moment().format("yyyy-MM-DD")}
								variant="outlined"	
								className={classes.textField}
								type="date"
								value={isEmpty(state.avail_date_from)}						
								onChange={handleChange}
								name="avail_date_from"
								InputLabelProps={{
									shrink: true
								}}
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label=""
								// defaultValue={moment().format("yyyy-MM-DD")}
								variant="outlined"	
								className={classes.textField}
								type="date"
								value={isEmpty(state.avail_date_to)}						
								onChange={handleChange}
								name="avail_date_to"
								InputLabelProps={{
									shrink: true
								}}
								size="small"
							/>
						</Grid>
					</Grid>		
					<Grid container spacing={1} className={clsx(classes.spacingBottom)}>
						<Grid item xs={4}>						
							<TextField
								label="Last Application Date"
								// defaultValue={moment().format("yyyy-MM-DD")}
								variant="outlined"	
								className={classes.textField}
								type="date"
								value={isEmpty(state.last_app_date)}						
								onChange={handleChange}
								name="last_app_date"
								InputLabelProps={{
									shrink: true
								}}
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>						
							<TextField
								label="Last Contacted Date"
								// defaultValue={moment().format("yyyy-MM-DD")}
								variant="outlined"	
								className={classes.textField}
								type="date"
								value={isEmpty(state.last_contacted_date)}						
								onChange={handleChange}
								name="last_contacted_date"
								InputLabelProps={{
									shrink: true
								}}
								size="small"
							/>
						</Grid>
					</Grid>	
					<Grid container spacing={1} className={clsx(classes.spacingBottom)}>
						<Grid item xs={4}>
							<TextField
								label="Height"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.height)}						
								onChange={handleChange}
								name="height"
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="Weight"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.weigth)}						
								onChange={handleChange}
								name="weigth"
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="Shoes Size"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.shoes_size)}						
								onChange={handleChange}
								name="shoes_size"
								size="small"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={1} className={clsx(classes.spacingBottom)}>
						<Grid item xs={4}>
							<TextField
								label="Eye Color"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.eye_color)}						
								onChange={handleChange}
								name="eye_color"
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="Hair Color"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.hair_color)}						
								onChange={handleChange}
								name="hair_color"
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="Working Clothes Size"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.working_clothes)}						
								onChange={handleChange}
								name="working_clothes"
								size="small"
							/>
						</Grid>
					</Grid>
				</Grid>
				</Grid>
			</Grid>
			</TableContainer>	
		}
		</Grid>
	</Grid>
}

export default BodyContent;
