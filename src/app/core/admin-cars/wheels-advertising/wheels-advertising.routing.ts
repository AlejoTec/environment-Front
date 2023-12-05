import { Route } from '@angular/router';

const wheelAdvertisingInfo = {
	path : 'bussiness',
	name: 'RECEPCION Y ATENCION AL CLIENTE',

};

export { wheelAdvertisingInfo }

export const wheelAdvertisingRouting: Route = {
	path: wheelAdvertisingInfo.path,
	loadChildren: () => import('./wheels-advertising.routes'),
}


