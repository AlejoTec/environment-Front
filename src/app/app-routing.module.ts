import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**RUTAS**/
import { loginRouting } from './auth/login/login.routing';
import { coreRouting } from './core/core.routing';

const routes: Routes = [
	loginRouting,
	coreRouting,

	/*Redirec*/
	{ path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
