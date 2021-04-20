import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Company, MOCK_COMPANY } from '../../../../@interface/company.interface';
import { IAppState } from '../../../../@store';
import { SaveCompanyAction } from '../../../../@store/actions/company.action';

@Component({
  selector: 'ngx-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {

  public newCompany: Company = {...MOCK_COMPANY}

  constructor(private store: Store<IAppState>, protected ref: NbDialogRef<CompanyDialogComponent>) { }

  ngOnInit(): void {
  }

  public submit(): void {

    this.store.dispatch(new SaveCompanyAction({...this.newCompany}));
    this.ref.close();
    this.newCompany = {...MOCK_COMPANY}

  }

  public close(): void {
    this.ref.close();
  }



}
