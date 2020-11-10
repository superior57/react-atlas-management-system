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
import { isEmpty } from "app/functions";


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
							value={isEmpty(state.LAST_NAME)}					
							onChange={handleChange}		
							name="LAST_NAME"
							size="small"			
						/>	
						<TextField
							label="Middle Name"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.MIDDLE_NAME)}						
							onChange={handleChange}
							name="MIDDLE_NAME"
							size="small"
						/>				
					</div>
					<div className="flex mb-20">
						<TextField
							required
							label="First Name"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.FIRST_NAME)}						
							onChange={handleChange}
							name="FIRST_NAME"
							size="small"
						/>
						<div className="w-full">
							<FormControl variant="outlined" className={classes.formControl} size="small">
								<InputLabel id="sex-label">Sex</InputLabel>
								<Select
									labelId="sex-label"
									value={isEmpty(state.SEX_TYPE_CODE)}
									onChange={handleChange}
									label="Sex"
									name="SEX_TYPE_CODE"
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
							value={isEmpty(state.FATHER_NAME)}						
							onChange={handleChange}
							name="FATHER_NAME"
							size="small"
						/>
						<TextField
							label="Mother Name"
							variant="outlined"		
							className={classes.textField}	
							value={isEmpty(state.MOTHER_NAME)}						
							onChange={handleChange}
							name="MOTHER_NAME"	
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Wife's Name"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.WIFE_NAME)}						
							onChange={handleChange}
							name="WIFE_NAME"
							size="small"
						/>
						<TextField
							label="No of Childs"
							variant="outlined"		
							className={classes.textField}		
							type="number"
							value={isEmpty(state.NO_OF_CHILDS)}						
							onChange={handleChange}
							name="NO_OF_CHILDS"
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
							value={isEmpty(state.BIRTH_DATE)}
							onChange={handleChange}
							name="BIRTH_DATE"
							size="small"
						/>
						<TextField
							label="Birth Place"
							variant="outlined"		
							className={classes.textField}		
							value={isEmpty(state.BIRTH_PLACE)}						
							onChange={handleChange}
							name="BIRTH_PLACE"
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Telephone 1"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.TELEPHONE_1)}						
							onChange={handleChange}
							name="TELEPHONE_1"
							size="small"
						/>
						<TextField
							label="Telephone 2"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.TELEPHONE_2)}						
							onChange={handleChange}
							name="TELEPHONE_2"	
							size="small"	
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Fax"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.FAX_1)}						
							onChange={handleChange}
							name="FAX_1"
							size="small"
						/>
						<TextField
							label="Skype"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.SKYPE_ACCOUNT)}						
							onChange={handleChange}
							name="SKYPE_ACCOUNT"	
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Mobile 1"
							variant="outlined"		
							className={classes.textField}
							value={isEmpty(state.MOBILE_1)}						
							onChange={handleChange}
							name="MOBILE_1"
							size="small"
						/>
						<TextField
							label="Mobile 2"
							variant="outlined"		
							className={classes.textField}	
							value={isEmpty(state.MOBILE_2)}						
							onChange={handleChange}
							name="MOBILE_2"	
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<TextField						
							label="Email 1"
							variant="outlined"		
							className={classes.textField}
							type="email"
							value={isEmpty(state.EMAIL_1)}						
							onChange={handleChange}
							name="EMAIL_1"
							size="small"
						/>
						<TextField
							label="Email 2"
							variant="outlined"	
							className={classes.textField}	
							type="email"	
							value={isEmpty(state.EMAIL_2)}						
							onChange={handleChange}
							name="EMAIL_2"
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
							value={isEmpty(state.HOME_ADDRESS)}						
							onChange={handleChange}
							name="HOME_ADDRESS"
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
							value={isEmpty(state.TEMP_ADDRESS)}						
							onChange={handleChange}
							name="TEMP_ADDRESS"
							size="small"
						/>
					</div>
					<div className="flex mb-20">
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5")} size="small">
							<InputLabel id="country-label">Country</InputLabel>
							<Select
								labelId="country-label"
								value={isEmpty(state.COUNTRY_CODE)}
								onChange={handleChange}
								label="Country"
								name="COUNTRY_CODE"
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
								value={isEmpty(state.NEAREST_PORT_CODE)}
								onChange={handleChange}
								label="Nearest Port"
								name="NEAREST_PORT_CODE"
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
							value={isEmpty(state.NEAREST_AIRPORT)}						
							onChange={handleChange}
							name="NEAREST_AIRPORT"	
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
								value={isEmpty(state.RANK_CODE)}
								onChange={handleChange}
								label="Rank"
								name="RANK_CODE"
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
								value={isEmpty(state.NAT_CODE)}
								onChange={handleChange}
								label="Nation"
								name="NAT_CODE"
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
								value={isEmpty(state.RELIGION_CODE)}
								onChange={handleChange}
								label="Religion"
								name="RELIGION_CODE"
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
								value={isEmpty(state.MARITAL_STATUS_CODE)}
								onChange={handleChange}
								label="Marital Status"
								name="MARITAL_STATUS_CODE"
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
							<EditableAvatar 
								onChange={handleChange}
								name="CREW_PHOTO"
							/>
						</div>
					</Grid>
					<Grid item xs={7} className="flex">
						<FormControl variant="outlined" className={clsx(classes.formControl, "w-full mr-5 mb-20")} size="small">
							<InputLabel id="manning-agent-label">Manning Agent</InputLabel>
							<Select
								labelId="manning-agent-label"
								value={isEmpty(state.M_AGENT_CODE)}
								onChange={handleChange}
								label="Manning Agent"
								name="M_AGENT_CODE"
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
								value={isEmpty(state.ONLY_FOR_FLEET_CODE)}
								onChange={handleChange}
								label="Only for Manager"
								name="ONLY_FOR_FLEET_CODE"
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
						value={isEmpty(state.CREW_NOTES)}						
						onChange={handleChange}
						name="CREW_NOTES"
						size="small"
					/>	
					<TextField
						label="Bank Account"
						multiline
						rows={3}
						variant="outlined"
						className={clsx(classes.textField, classes.spacingBottom)}
						value={isEmpty(state.BANK_ACCOUNT)}						
						onChange={handleChange}
						name="BANK_ACCOUNT"
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
								value={isEmpty(state.AV_FROM)}						
								onChange={handleChange}
								name="AV_FROM"
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
								value={isEmpty(state.AV_TO)}						
								onChange={handleChange}
								name="AV_TO"
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
								value={isEmpty(state.LAST_APPLICATION_DATE)}						
								onChange={handleChange}
								name="LAST_APPLICATION_DATE"
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
								value={isEmpty(state.LAST_CONTACTED_DATE)}						
								onChange={handleChange}
								name="LAST_CONTACTED_DATE"
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
								value={isEmpty(state.CREW_HEIGHT)}						
								onChange={handleChange}
								name="CREW_HEIGHT"
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="Weight"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.CREW_WEIGHT)}						
								onChange={handleChange}
								name="CREW_WEIGHT"
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="Shoes Size"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.SHOES_SIZE)}						
								onChange={handleChange}
								name="SHOES_SIZE"
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
								value={isEmpty(state.EYE_COLOR)}						
								onChange={handleChange}
								name="EYE_COLOR"
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="Hair Color"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.HAIR_COLOR)}						
								onChange={handleChange}
								name="HAIR_COLOR"
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="Working Clothes Size"
								variant="outlined"	
								className={classes.textField}
								value={isEmpty(state.WORKING_CLOTHES_SIZE)}						
								onChange={handleChange}
								name="WORKING_CLOTHES_SIZE"
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
