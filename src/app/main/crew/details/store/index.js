import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// values for dialog.... 
export const getVesselTypes = createAsyncThunk('crew/getVesselTypes', async (params, {dispatch, getState}) => {
	const response = await axios.get(`/api/crew/vessel-types`, { params });
	const data = await response.data;
	return data;
});

export const getEngTypes = createAsyncThunk('crew/getEngTypes', async (params, {dispatch, getState}) => {
	const response = await axios.get(`/api/crew/eng-types`, { params });
	const data = await response.data;
	return data;
});

export const getNationalities = createAsyncThunk('crew/getNationalities', async (params, {dispatch, getState}) => {
	const response = await axios.get(`/api/crew/nationalities`, { params });
	const data = await response.data;
	return data;
});

export const getSoffReasons = createAsyncThunk('crew/getSoffReasons', async (params, {dispatch, getState}) => {
	const response = await axios.get(`/api/crew/soff-reasons`, { params });
	const data = await response.data;
	return data;
});
//////////////

export const getCrewCerts = createAsyncThunk('crew/getCrewCerts', async (params, {dispatch, getState}) => {
    const curState = getState();
    const curCrew = curState.crewApp.crew.recent;
    const crewId = curCrew.id;
    
    params = {
        crewId: crewId
    };
	const response = await axios.get(`/api/crew/crew-certs`, { params });
	const data = await response.data;

	return data;
});

export const getCountries = createAsyncThunk('crew/getCountries', async (params, {dispatch, getState}) => {
	const response = await axios.get(`/api/crew/countries`, { params });
	const data = await response.data;

	return data;
});

export const updateCertificate = createAsyncThunk('crew/updateCrewCerts', async (cert, { dispatch, getState }) => {
	const response = await axios.put(`/api/crew/crew-certs/${cert.id}`, cert);
	const data = await response.data;

	dispatch(getCrewCerts());
	return data;
});

export const deleteCertificate = createAsyncThunk('crew/deleteCrewCerts', async (cert, { dispatch, getState }) => {
	const response = await axios.delete(`/api/crew/crew-certs/${cert.id}`, cert);
	const data = await response.data;

	dispatch(getCrewCerts());
	return data;
});

//  previous services
export const getPrevServs = createAsyncThunk('crew/getPrevServs', async (params, {dispatch, getState}) => {
	const curState = getState();	
    const curCrew = curState.crewApp.crew.recent;
    const crewId = curCrew.id;
    
    params = {
        crewId: crewId
    };
	const response = await axios.get(`/api/crew/crew-pr-servs`, { params });
	const data = await response.data;

	return data;
});

export const addPrevServ = createAsyncThunk('crew/addPrevServ', async (prev_serv, { dispatch, getState }) => {
	const curState = getState();	
    const curCrew = curState.crewApp.crew.recent;
    const crewId = curCrew.id;
    
    prev_serv = {
		...prev_serv,
        crew_id: crewId
	};
	
	const response = await axios.post(`/api/crew/crew-pr-servs`, prev_serv);
	const data = await response.data;
	dispatch(getPrevServs());
	return data;
});

export const updatePrevServ = createAsyncThunk('crew/updatePrevServ', async (prev_serv, { dispatch, getState }) => {
	const response = await axios.put(`/api/crew/crew-pr-serv/${prev_serv.id}`, prev_serv);
	const data = await response.data;
	dispatch(getPrevServs());
	return data;
});


export const deletePrevServ = createAsyncThunk('crew/deletePrevServ', async (prev_serv, { dispatch, getState }) => {
	const response = await axios.delete(`/api/crew/crew-pr-serv/${prev_serv.id}`);
	const data = await response.data;

	dispatch(getPrevServs());
	return data;
});




const detailsSlice = createSlice({
	name: 'crew/crewDetails',
	initialState: {
		certificates: {
			list: [],
			recent: null
		},
		countries: [],
		prev_services: {
			list: [],
			recent: null
		},
		vessel_types: {
			list: []
		},
		eng_types: {
			list: []
		},
		nationalities: {
			list: []
		},
		soff_reasons: {
			list: []
		}
	},
	reducers: {
		setCertificate: (state, action) => {
			state.certificates.recent = action.payload;
		},
		setPrevServ: (state, action) => {
			state.prev_services.recent = action.payload;
		}
	},
	extraReducers: {
		[getCrewCerts.fulfilled]: (state, action) => {
			state.certificates.list = action.payload;
		},
		[getCountries.fulfilled]: (state, action) => {
			state.countries = action.payload
		},
		[getPrevServs.fulfilled]: (state, action) => {
			state.prev_services.list = action.payload
		},
		[getVesselTypes.fulfilled]: (state, action) => {
			state.vessel_types.list = action.payload
		},
		[getEngTypes.fulfilled]: (state, action) => {
			state.eng_types.list = action.payload
		},
		[getNationalities.fulfilled]: (state, action) => {
			state.nationalities.list = action.payload
		},
		[getSoffReasons.fulfilled]: (state, action) => {
			state.soff_reasons.list = action.payload
		}
	}
});

export const { setCertificate, setPrevServ } = detailsSlice.actions;

export default detailsSlice.reducer;
