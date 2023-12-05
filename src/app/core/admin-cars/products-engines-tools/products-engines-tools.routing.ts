import { Route } from '@angular/router';

const productsOnSale = {
	path : 'prodcutsOnSale',
	name: 'PRODUCTOS ENGINESTOOLS',
};

export { productsOnSale }

export const CarOnSaleRouting: Route = {
	path: productsOnSale.path ,
	loadChildren: () => import('./products-engines-tools.routes'),
}


