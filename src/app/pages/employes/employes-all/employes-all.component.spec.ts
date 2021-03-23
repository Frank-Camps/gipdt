import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesAllComponent } from './employes-all.component';

describe('EmployesAllComponent', () => {
  let component: EmployesAllComponent;
  let fixture: ComponentFixture<EmployesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
