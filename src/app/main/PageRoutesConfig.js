import SearchPage from './crew/search';
import PersonalDetails from './crew/edit/personal-details';
import OtherDetailsPage from './crew/edit/other-details';
import PreviousServicesPage from './crew/edit/previous-services';
import NewPage from './crew/new';
import CompanyPreviousServicesPage from './crew/edit/company-previous-services';
import AppraisalsPage from './crew/edit/appraisals';
import NOKPage from './crew/edit/nok';
import AllotteesPage from './crew/edit/allottees';
import TrainingPage from './crew/edit/training';
import CertificatesPage from './crew/edit/certificates';

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
			path: '/crew/edit/:crewId/personal-details',
			component: PersonalDetails
		},
		{
			path: '/crew/edit/:crewId/other-details',
			component: OtherDetailsPage
		},
		{
			path: '/crew/edit/:crewId/certificates',
			component: CertificatesPage
		},
		{
			path: '/crew/edit/:crewId/previous-services',
			component: PreviousServicesPage
		},
		{
			path: '/crew/edit/:crewId/company-previous-services',
			component: CompanyPreviousServicesPage
		},
		{
			path: '/crew/edit/:crewId/appraisals',
			component: AppraisalsPage
		},
		{
			path: '/crew/edit/:crewId/next-of-kin',
			component: NOKPage
		},
		{
			path: '/crew/edit/:crewId/allottees',
			component: AllotteesPage
		},
		{
			path: '/crew/edit/:crewId/trainings',
			component: TrainingPage
		},
		{
			path: '/crew/edit/:crewId/certificates',
			component: CertificatesPage
		}
	]
};

export default PagesRouteConfig;
