import { Component, Input, OnInit } from '@angular/core';
import { Tenant } from '../../../@interface/Tenant.interface';

@Component({
  selector: 'ngx-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  @Input() tenants: Tenant[]
  public tenant: Tenant;
  constructor() { }

  ngOnInit(): void {
    this.tenants.forEach(t => { this.tenant = t})
  }

}
