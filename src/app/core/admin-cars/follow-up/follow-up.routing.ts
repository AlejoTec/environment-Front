import { Route } from '@angular/router';

const followUpCar = {
	path : 'follow-up-car',
	name: 'LISTA PRODUCTOS'
};

export { followUpCar }

export const CarfollowUpRouting: Route = {
	path: followUpCar.path ,
	loadChildren: () => import('./follow-up.routes'),
}


