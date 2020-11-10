import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



// crews....
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

// export const getCrew = createAsyncThunk('crew/getCrew', async (crewId) => {
// 	const response = await axios.get(`/api/crew/crews/${crewId}`);
// 	const data = await response.data;

// 	return data;
// });

// export const addCrew = createAsyncThunk('crew/addCrew', async (crew, {dispatch}) => {	
// 	const response = await axios.post('/api/crew/crews', crew);
// 	const data = await response.data;

// 	dispatch(getCrews());
// 	return data;
// });

// export const updateCrew = createAsyncThunk('crew/updateCrew', async (crew, { dispatch, getState }) => {
// 	const response = await axios.put(`/api/crew/crews/${crew.id}`, getValideData(crew));
// 	const data = await response.data;

// 	dispatch(getCrew(crew.id));
// 	return data;
// });

const detailsSlice = createSlice({
	name: 'crew/crewDetails',
	initialState: {
		certificates: {
			list: [],
			recent: null
		},
	},
	reducers: {
		setCertificate: (state, action) => {
			state.certificates.recent = action.payload;
		}
	},
	extraReducers: {
		[getCrewCerts.fulfilled]: (state, action) => {
			state.certificates.list = action.payload;
		},
		// [getCrew.fulfilled]: (state, action) => {
		// 	state.recent = action.payload;
		// },
		// [addCrew.fulfilled]: (state, action) => {
		// 	state.recent = action.payload;
		// }
	}
});

export const { setCertificate } = detailsSlice.actions;

export default detailsSlice.reducer;
