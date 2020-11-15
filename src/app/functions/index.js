import axios from 'axios';

export function isEmpty(value) {
    return value ? value : "";
}

export const getValideData = (object) => {
	var res = {};
	Object.keys(object).map(key => {
		if(object[key]) {
			res[key] = object[key]
		}		
	});
	return res;
}

export const getFormDataFromObject = (object) => {
	var formData = new FormData();
	for ( var key in object ) {
		if(object[key]) {
			formData.append(key, object[key]);
		}
	}
	return formData;
}

export const getImageURL = (src) => {
	const API_URL = axios.defaults.baseURL;
	return `${API_URL}${src}`;
}