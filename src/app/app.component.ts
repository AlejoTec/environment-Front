import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'car-wash';
	loader$!: Observable<boolean>;

	constructor(
		private _loaderSrv: LoaderService
	) {
		this.loader$ = this._loaderSrv.loader$;
	}
}
