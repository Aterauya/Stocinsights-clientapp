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
  pageSize = 12;
  pageSizeOptions = [10, 12, 14, 16, 18, 20];

  constructor(private companiesService: CompaniesHttpService) { }

  ngOnInit(): void {
    this.getCompanies(this.currentPage);
  }

  getCompanies(pageNumber) {
    this.companiesService
      .getAllCompanies(pageNumber, this.pageSize)
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
    if (event.pageIndex > this.currentPage) {
      this.getNextPage();
    } else {
      this.getPreviousPage();
    }
    if (this.pageSize != event.pageSize) {
      this.pageSize = event.pageSize;
      this.getCompanies(event.pageIndex);
    }
  }
}
