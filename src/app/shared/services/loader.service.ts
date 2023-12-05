import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _loaderBS: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public get loader$(): Observable<boolean> {
    return this._loaderBS.asObservable();
  }


  constructor() { }

  public showLoader() {
    this._loaderBS.next(true);
  }

  public hideLoader() {
    this._loaderBS.next(false);
  }
}
