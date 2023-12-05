import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from '../interfaces/login/login.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { LoginResponse } from '../interfaces/login/login-respnse.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService extends ApiService {

	private controller: string = 'auth';

	constructor(
		private _http: HttpClient
	) { 
		super();
	}


	public login(loginInfo: LoginInfo): Observable<LoginResponse> {
		return this._http.post<LoginResponse>(
			`${this.apiUrl}/${this.controller}/login`,
			loginInfo
		);
	}
}
