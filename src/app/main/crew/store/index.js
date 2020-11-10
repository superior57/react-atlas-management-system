import { combineReducers } from '@reduxjs/toolkit';
import crew from './crewSlice';
import crew_details from "../details/store";

const reducer = combineReducers({
	crew,
	crew_details
});

export default reducer;