import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getValideData = (object) => {
	var res = {};
	Object.keys(object).map(key => {
		if(object[key]) {
			res[key] = object[key]
		}		
	});
	return res;
}

// crews....
export const getCrews = createAsyncThunk('crew/getCrews', async (params) => {
	const response = await axios.get(`/api/crew/crews`, { params });
	const data = await response.data;

	return data;
});

export const getCrew = createAsyncThunk('crew/getCrew', async (crewId) => {
	const response = await axios.get(`/api/crew/crews/${crewId}`);
	const data = await response.data;

	return data;
});

export const addCrew = createAsyncThunk('crew/addCrew', async (crew, {dispatch}) => {	
	const response = await axios.post('/api/crew/crews', crew);
	const data = await response.data;

	dispatch(getCrews());
	return data;
});

export const updateCrew = createAsyncThunk('crew/updateCrew', async (crew, { dispatch, getState }) => {
	const response = await axios.put(`/api/crew/crews/${crew.id}`, getValideData(crew));
	const data = await response.data;

	dispatch(getCrew(crew.id));
	return data;
});

const crewSlice = createSlice({
	name: 'crew/crews',
	initialState: {
		list: [],
		recent: null,
	},
	reducers: {
		setCrew: (state, action) => {
			state.recent = action.payload;
		}
	},
	extraReducers: {
		[getCrews.fulfilled]: (state, action) => {
			state.list = action.payload;
		},
		[getCrew.fulfilled]: (state, action) => {
			state.recent = action.payload;
		},
		[addCrew.fulfilled]: (state, action) => {
			state.recent = action.payload;
		}
	}
});

export const { setCrew } = crewSlice.actions;

export default crewSlice.reducer;
