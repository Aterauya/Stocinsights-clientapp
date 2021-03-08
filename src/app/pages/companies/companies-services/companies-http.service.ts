import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesHttpService {

  constructor(private http: HttpClient) { }

  getAllCompanies(pageNumber): Observable<any> {
    return this.http.get(`https://test-stockmaster-companies.azurewebsites.net/api/Companies/GetCompaniesList/${pageNumber}`)
  }

  getCompanyDetails(companyId): Observable<any> {
    return this.http.get(`https://test-stockmaster-companies.azurewebsites.net/api/Companies/GetCompanyInformation/${companyId}`)

  }
}
