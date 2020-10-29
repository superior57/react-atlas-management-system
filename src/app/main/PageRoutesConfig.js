import New from './crew/new';
import Search from './crew/search/Search';
import PersonalDetails from './crew/edit/personal-details';
import CertificatesPage from './crew/edit/certificates';

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
			path: '/crew/edit/:crewId/certificates',
			component: CertificatesPage
		}
	]
};

export default PagesRouteConfig;
