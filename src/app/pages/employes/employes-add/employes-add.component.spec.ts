import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesAddComponent } from './employes-add.component';

describe('EmployesAddComponent', () => {
  let component: EmployesAddComponent;
  let fixture: ComponentFixture<EmployesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
