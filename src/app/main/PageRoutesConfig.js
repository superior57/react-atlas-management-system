import New from './crew/new';
import Search from './crew/search/Search';
import PersonalDetails from './crew/edit/personal-details';
import OtherDetails from './crew/edit/other-detials';

const PagesRouteConfig = {
	routes: [
		{
			path: '/crew/new',
			component: New
		},				
		{
			path: '/crew/search',
			component: Search
		},
		{
			path: '/crew/edit/:crewId/personal-details',
			component: PersonalDetails
		},
		{
			path: '/crew/edit/:crewId/other-details',
			component: OtherDetails
		}
	]
};

export default PagesRouteConfig;
