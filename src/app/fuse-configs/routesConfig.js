import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';

import PagesRouteConfig from 'app/main/PageRoutesConfig';

const routeConfigs = [
	PagesRouteConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/dashboard" />
	}
];

export default routes;
