import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import React, {

} from 'react';




const useStyles = makeStyles(theme => ({
	
}));

function BodyContent(props) {
	const classes = useStyles(props);

	return <>
		<TableContainer component={Paper} >
			<Table className={classes.table} size="small">
				<TableHead>
					<TableRow>
						<TableCell align="center" colSpan={2}>
							Certification
						</TableCell>
						<TableCell align="center">S</TableCell>
						<TableCell align='center'>Number</TableCell>
						<TableCell align="center">Issued</TableCell>
						<TableCell align='center'>Expired</TableCell>
						<TableCell align="center">Issue Country</TableCell>
						<TableCell align='center'>OnVSL</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell colSpan={8}>:01.Documents</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}></TableCell>
						<TableCell>Passport</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>566359</TableCell>
						<TableCell>16/03/2004</TableCell>
						<TableCell>11/01/2014</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox /> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>SBK</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>CTB180452</TableCell>
						<TableCell>22/07/2009</TableCell>
						<TableCell>04/01/2014</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={8}>:02.National Licenses</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}></TableCell>
						<TableCell>Certificate of Competency</TableCell>
						<TableCell>Y</TableCell>
						<TableCell></TableCell>
						<TableCell>21/01/2014</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Endor.Attesting the Issue</TableCell>
						<TableCell>Y</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={8}>:03.Basic Training</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={7}></TableCell>
						<TableCell>STCW VI/1-1(BASIC)-PERSONAL SURVIVAL TECHNIQUES</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>7246/04</TableCell>
						<TableCell>18/12/2008</TableCell>
						<TableCell></TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>STCW VI/1-2(BASIC)-BASIC FIRE FIGHTING</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>7246/04</TableCell>
						<TableCell>18/12/2008</TableCell>
						<TableCell></TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>STCW VI/1-3(BASIC)-ELEMENTARY FIRST AID</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>7246/04</TableCell>
						<TableCell>18/12/2008</TableCell>
						<TableCell></TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>STCW VI/1-4(BASIC)-PERSONAL & SOCIAL RESP.</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>7246/04</TableCell>
						<TableCell>18/12/2008</TableCell>
						<TableCell></TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>STCW VI/2-1(PROF.RESC.BOATS)</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>8149/04</TableCell>
						<TableCell>18/12/2008</TableCell>
						<TableCell></TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>STCW VI/2-2(SURVIVAL)</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>PFRBOOO21</TableCell>
						<TableCell>07/03/2012</TableCell>
						<TableCell></TableCell>
						<TableCell>Panama</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>STCW VI/3-1ADVANCED FIRE FIGHTING</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>AFF-7750/04</TableCell>
						<TableCell>24/12/2008</TableCell>
						<TableCell></TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={8}>:04.Advanced Training</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}></TableCell>
						<TableCell>STCW VI/4-1(MED FIRST AID)</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>MFA_4004/04</TableCell>
						<TableCell>17/12/2008</TableCell>
						<TableCell>16/12/2013</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox /> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>STCW VI/4-2(MEDICAL CARE)</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>AMC-2817/11</TableCell>
						<TableCell>23/02/2011</TableCell>
						<TableCell>22/02/2016</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={8}>:05.Medical</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}></TableCell>
						<TableCell>Medical Fitness</TableCell>
						<TableCell>Y</TableCell>
						<TableCell></TableCell>
						<TableCell>21/06/2012</TableCell>
						<TableCell>21/06/2013</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox /> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Yellow Fever</TableCell>
						<TableCell>Y</TableCell>
						<TableCell></TableCell>
						<TableCell>23/04/2011</TableCell>
						<TableCell>23/04/2021</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={8}>:07.Bridge Training</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={5}></TableCell>
						<TableCell>Ship Security Officer</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>02523/04</TableCell>
						<TableCell>23/03/2004</TableCell>
						<TableCell></TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox /> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>G.M.D.S.S</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>CT825542B</TableCell>
						<TableCell>19/11/2013</TableCell>
						<TableCell>18/02/2014</TableCell>
						<TableCell></TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>ARPA</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>RN.2711/04</TableCell>
						<TableCell>17/12/2008</TableCell>
						<TableCell>16/12/2013</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>PADAR SIMULATOR</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>RN.2711/04</TableCell>
						<TableCell>17/12/2008</TableCell>
						<TableCell>16/12/2013</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>I.G.S</TableCell>
						<TableCell>Y</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={8}>:08.Tanker Certificates</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={3}></TableCell>
						<TableCell>OIL TANKER training</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>SOT-1922/04</TableCell>
						<TableCell>17/12/2008</TableCell>
						<TableCell>16/12/2013</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox /></TableCell>
					</TableRow>
					<TableRow>
						<TableCell>CHEMICAL TANKER Training</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>SCT-1492/04</TableCell>
						<TableCell>17/12/2008</TableCell>
						<TableCell>16/12/2013</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>GAS TANKER Training</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>3253</TableCell>
						<TableCell>25/02/2004</TableCell>
						<TableCell>24/02/1014</TableCell>
						<TableCell>Malta</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={8}>:09.Flag</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={3}></TableCell>
						<TableCell>Panama COC Endorsement</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>CT825541B</TableCell>
						<TableCell>19/10/2013</TableCell>
						<TableCell>18/02/1014</TableCell>
						<TableCell></TableCell>
						<TableCell><Checkbox /></TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Panama SBK/WK II-5 & WK III-5</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>2922</TableCell>
						<TableCell>22/07/2099</TableCell>
						<TableCell>04/01/2014</TableCell>
						<TableCell>Myanmar</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Malta Endorsement</TableCell>
						<TableCell>Y</TableCell>
						<TableCell>87848</TableCell>
						<TableCell>07/05/2010</TableCell>
						<TableCell>04/01/2014</TableCell>
						<TableCell>Malta</TableCell>
						<TableCell><Checkbox/> </TableCell>
					</TableRow>
				</TableBody> 
			</Table>
		</TableContainer>
	</>;
}

export default BodyContent;
