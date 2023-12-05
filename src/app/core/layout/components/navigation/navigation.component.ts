import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { carEntryInfo } from 'src/app/core/admin-cars/cart-entry/car-entry.routing';
import { followUpCar } from 'src/app/core/admin-cars/follow-up/follow-up.routing';
import { productsOnSale } from 'src/app/core/admin-cars/products-engines-tools/products-engines-tools.routing';
import { wheelAdvertisingInfo, wheelAdvertisingRouting } from 'src/app/core/admin-cars/wheels-advertising/wheels-advertising.routing';

const imports = [
	CommonModule,
	RouterModule,
];

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
	standalone: true,
	imports
})
export class NavigationComponent {

	menuItems = [
		/**Agregar las demas opciones */
		wheelAdvertisingInfo,
		carEntryInfo,
	    productsOnSale,
		followUpCar,
	];

	constructor(
	) {
	};

}
