import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.moduel';
import { AuthService } from '../services/auth.service';
import { LoginInfo } from '../interfaces/login/login.interface';
import { firstValueFrom, timeout } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginResponse } from '../interfaces/login/login-respnse.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		MaterialModule,
		RouterLink],
})
export class LoginComponent {
	public formLogin: UntypedFormGroup;

	constructor(
		private _formBuilder: UntypedFormBuilder,
		private _authSrv: AuthService,
		private _router: Router
	) {
		this.formLogin = this._formBuilder.group({
			email: ['a@a.comm', [Validators.required, Validators.email]],
			password: ['123', [Validators.required]],
		});
	}


	async login() {
		this.formLogin.markAllAsTouched();

		if (this.formLogin.invalid) {
			return;
		}

		try {
			const loginInfo: LoginInfo = this.formLogin.value;
			
			const loginResp: LoginResponse = await firstValueFrom(this._authSrv.login(loginInfo));


			if (loginResp.valid) {
				localStorage.setItem('token', loginResp.token ?? '')
				this._router.navigate(['admin']);
			}
		}
		catch (error: any) {
			let title = 'Error en el servicio';
			let text = 'Por favor valide mas tarde, estamos corrigiendo el problema';
			
			if(error.status == 0) {
				title = 'API sin correr'
				text = 'El servicio no esta arriba, por favor sube el BackEnd!!!'
			}

			if(error.status == 401) {
				title = 'Usuario Invalido'
				text = 'Tus datos estan mal, por favor corrigelos!'
			}

			Swal.fire({
				icon: 'error',
				title,
				text
			});
		}
	}
}
