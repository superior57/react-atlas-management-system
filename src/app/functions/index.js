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