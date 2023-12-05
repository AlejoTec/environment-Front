import { Route } from '@angular/router';

const carEntryInfo = {
	path : 'car-entry',
	name: 'INGRESO DE AUTOS'
};

export { carEntryInfo }

export const CarEntryRouting: Route = {
	path: carEntryInfo.path ,
	loadChildren: () => import('./car-entry.routes'),
}


