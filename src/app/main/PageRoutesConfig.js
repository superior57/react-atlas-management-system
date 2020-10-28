import New from './crew/new';
import Search from './crew/search/Search';

export const NewConfig = {
	routes: [
		{
			path: '/crew/new',
			component: New
		},		
	]
};

export const SearchConfig = {
	routes: [
		{
			path: '/crew/search',
			component: Search
		},		
	]
};