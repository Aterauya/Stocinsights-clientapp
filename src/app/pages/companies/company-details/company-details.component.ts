import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesHttpService } from '../companies-services/companies-http.service';
import { Company } from '../company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company: any;

  constructor(private route: ActivatedRoute, private companiesService: CompaniesHttpService) { }

  ngOnInit(): void {
    this.getCompaniesDetails(this.route.snapshot.params.companyId);
  };

  getCompaniesDetails(companyId) {
    this.companiesService
      .getCompanyDetails(companyId)
      .subscribe(res => {
        console.log(res);
        this.company = res;
      });
  }
}
