import { Routes } from "@angular/router";
import { CarEntryComponent } from "./car-entry.component";

export default [
    {
        path     : '',
        component: CarEntryComponent ,
		children: [

		]
    },
] as Routes;

