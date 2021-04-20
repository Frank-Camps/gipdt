import { Component, OnInit } from '@angular/core';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest, NbDialogService, NbGetters } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { AxiosResponse } from 'axios';
import { Company, MOCK_COMPANY } from '../../@interface/company.interface';
import { HttpIdsService } from '../../@service/ids.service';
import { IAppState } from '../../@store';
import { GetAllCompagniesAction } from '../../@store/actions/company.action';
import { CompanySelector } from '../../@store/selectors/company.selector';
import { CompanyDialogComponent } from './components/company-dialog/company-dialog.component';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  companies: Company[]
}

@Component({
  selector: 'ngx-compagnies',
  templateUrl: './compagnies.component.html',
  styleUrls: ['./compagnies.component.scss']
})
export class CompagniesComponent implements OnInit {

  public customColumn = ['name', 'phone', 'address'];
  public allColumns = [...this.customColumn ];
  public dataSource: NbTreeGridDataSource<FSEntry>;
  public sortColumn: string;
  public data: TreeNode<Company>[] = [];
  public sortDirection: NbSortDirection = NbSortDirection.NONE;
  public company: Company = {...MOCK_COMPANY};
  public compagnies: Company[] = [];

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    private dialogService: NbDialogService,
    private store: Store<IAppState>) {}

  public ngOnInit() {
    let tempData = [];
    let data = {}

    if(!this.company.id) {
        HttpIdsService.getCompanyIndexId().then((id: AxiosResponse) => {
        HttpIdsService.putCompanyIndexId((id.data.value + 1) % 100).catch((e) => console.log(e));
        this.company.id = ((id.data.value).toString());
      }).catch((e) => console.log(e));
    }

    const getters: NbGetters<FSEntry, FSEntry> = {
      dataGetter: (node: FSEntry) => node,
      // childrenGetter: (node: FSEntry) => node.childEntries || undefined,
      // expandedGetter: (node: FSEntry) => !!node.expanded,
    };

    this.store.select(CompanySelector.compagnies).subscribe((compagnies: Company[]) => {
      this.compagnies = compagnies;

    });
    this.compagnies.forEach(company => {
      data = {id: company.id, name: company.name, phone: company.phone, address: company.address}
      tempData.push({...data});
    })
    this.data = [...tempData]
    this.dataSource = this.dataSourceBuilder.create(this.data, getters);
    this.store.dispatch(new GetAllCompagniesAction());

  }

  public updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  public getDirection(column: string): NbSortDirection {
    if (column === this.sortColumn) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  public addNewCompany():void {
      HttpIdsService.getCompanyIndexId().then((id: AxiosResponse) => {
        HttpIdsService.putCompanyIndexId((id.data.value + 1) % 100).catch((e) => console.log(e));
        this.company.id = ((id.data.value).toString());
      }).catch((e) => console.log(e));

    this.dialogService.open(CompanyDialogComponent, {context: {newCompany:{...this.company}}})
  }

  public selectCompany(company:Company):void {
    console.log(company);

    this.dialogService.open(CompanyDialogComponent, {context: {newCompany: {...company}}});
  }

}
