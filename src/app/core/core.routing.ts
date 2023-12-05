import { Route } from '@angular/router';


export const coreRouting: Route = {
	path: 'admin',
	loadChildren: () => import('./core.routes'),
}


