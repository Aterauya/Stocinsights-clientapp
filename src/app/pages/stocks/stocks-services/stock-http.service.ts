import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockHttpService {

  constructor(private http: HttpClient) { }

  getHistoricalStock(ticker): Observable<any> {
    return this.http.get(`https://test-stockmaster-historicalstock.azurewebsites.net/api/HistoricalStocks/GetHistoricalStocks/${ticker}`)
  }
}
