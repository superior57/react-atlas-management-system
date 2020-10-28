import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';

import { 
	NewConfig,
	SearchConfig
} from 'app/main/PageRoutesConfig';

const routeConfigs = [
	NewConfig,
	SearchConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/crew/new" />
	}
];

export default routes;
