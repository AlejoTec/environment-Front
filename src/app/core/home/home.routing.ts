import { Route } from '@angular/router';

const homeInfo = {
	path : '',
	name: 'Inicio'
};

export { homeInfo }

export const homeRouting: Route = {
	path: '',
	data: {
		name: 'Inicio'
	},
	loadChildren: () => import('./home.routes'),
}


