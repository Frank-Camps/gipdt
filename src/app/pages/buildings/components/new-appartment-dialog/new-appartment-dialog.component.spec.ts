import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppartmentDialogComponent } from './new-appartment-dialog.component';

describe('NewAppartmentDialogComponent', () => {
  let component: NewAppartmentDialogComponent;
  let fixture: ComponentFixture<NewAppartmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppartmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppartmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
