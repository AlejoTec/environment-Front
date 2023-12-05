import { Route } from '@angular/router';

export const loginRouting: Route = {
	path: 'login',
	loadChildren: () => import('./login.routes'),
}


