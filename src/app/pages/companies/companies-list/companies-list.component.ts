import { Component, OnInit } from '@angular/core';
import { CompaniesHttpService } from '../companies-services/companies-http.service'
import { Company } from '../company'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company;
  displayedColumns: string[] = ['name', 'ticker', 'currency', 'details']
  currentPage = 0;
  pageSize = 10;

  constructor(private companiesService: CompaniesHttpService) { }

  ngOnInit(): void {
    this.getCompanies(this.currentPage);
  }

  getCompanies(pageNumber) {
    this.companiesService
      .getAllCompanies(pageNumber)
      .subscribe(res => {
        console.log(res);
        this.companies = res;
        console.log(this.companies)
      });
  }

  getNextPage() {
    this.currentPage = this.currentPage + 1;
    this.getCompanies(this.currentPage)
  }

  getPreviousPage() {
    this.currentPage = this.currentPage - 1;
    this.getCompanies(this.currentPage);
  }

  pageEvents(event: any) {
    console.log(event.pageIndex);
    console.log(event.pageSize);
    if (event.pageIndex > this.currentPage) {
      // Clicked on next button
      this.getNextPage();
    } else {
      // Clicked on previous button
      this.getPreviousPage();
    }
  }
}
