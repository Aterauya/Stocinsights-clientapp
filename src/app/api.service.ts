import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../../auth_config.json';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  ping$(): Observable<any> {
    return this.http.get(`https://test-stockmaster-companies.azurewebsites.net/api/Companies/GetCompaniesInformation`)
  }
}
