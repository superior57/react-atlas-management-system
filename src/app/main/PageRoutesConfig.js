import SearchPage from './crew/search';
import PersonalDetails from './crew/details/personal-details';
import OtherDetailsPage from './crew/details/other-details';
import PreviousServicesPage from './crew/details/previous-services';
import NewPage from './crew/new';
import CompanyPreviousServicesPage from './crew/details/company-previous-services';
import AppraisalsPage from './crew/details/appraisals';
import NOKPage from './crew/details/nok';
import AllotteesPage from './crew/details/allottees';
import TrainingPage from './crew/details/training';
import CertificatesPage from './crew/details/certificates';

const PagesRouteConfig = {
	routes: [
		{
			path: '/crew/new',
			component: NewPage
		},				
		{
			path: '/crew/search',
			component: SearchPage
		},
		{
			path: '/crew/details/:crewId/personal-details',
			component: PersonalDetails
		},
		{
			path: '/crew/details/:crewId/other-details',
			component: OtherDetailsPage
		},
		{
			path: '/crew/details/:crewId/certificates',
			component: CertificatesPage
		},
		{
			path: '/crew/details/:crewId/previous-services',
			component: PreviousServicesPage
		},
		{
			path: '/crew/details/:crewId/company-previous-services',
			component: CompanyPreviousServicesPage
		},
		{
			path: '/crew/details/:crewId/appraisals',
			component: AppraisalsPage
		},
		{
			path: '/crew/details/:crewId/next-of-kin',
			component: NOKPage
		},
		{
			path: '/crew/details/:crewId/allottees',
			component: AllotteesPage
		},
		{
			path: '/crew/details/:crewId/trainings',
			component: TrainingPage
		},
		{
			path: '/crew/details/:crewId/certificates',
			component: CertificatesPage
		}
	]
};

export default PagesRouteConfig;
