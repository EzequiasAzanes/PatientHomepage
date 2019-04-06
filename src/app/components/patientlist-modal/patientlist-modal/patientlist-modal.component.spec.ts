import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientlistModalComponent } from './patientlist-modal.component';

describe('PatientlistModalComponent', () => {
  let component: PatientlistModalComponent;
  let fixture: ComponentFixture<PatientlistModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientlistModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientlistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
