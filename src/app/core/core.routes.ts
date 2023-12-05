import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { homeRouting } from "./home/home.routing";
import { wheelAdvertisingRouting } from "./admin-cars/wheels-advertising/wheels-advertising.routing";
import { CarEntryRouting } from "./admin-cars/cart-entry/car-entry.routing";
import { CarOnSaleRouting } from './admin-cars/products-engines-tools/products-engines-tools.routing';
import { CarfollowUpRouting } from "./admin-cars/follow-up/follow-up.routing";


export default [
	{
		path: '',
		component: LayoutComponent,
		children: [
			homeRouting,
			wheelAdvertisingRouting,
            CarEntryRouting,
			CarOnSaleRouting,
            CarfollowUpRouting,
			/*Redirec*/
			{ path: '**', redirectTo: '', pathMatch: 'full' },
		]
	},
] as Routes;

