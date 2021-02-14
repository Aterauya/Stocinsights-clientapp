import { Component, OnInit } from '@angular/core';
import { CompaniesHttpService } from '../companies-services/companies-http.service'
import { Company } from '../company'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[];
  displayedColumns: string[] = ['name', 'ticker', 'currency', 'details']

  constructor(private companiesService: CompaniesHttpService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesService
      .getAllCompanies()
      .subscribe(res => {
        console.log(res);
        this.companies = res;
      });
  }

}
