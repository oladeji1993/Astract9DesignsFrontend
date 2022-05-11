import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitedCasesComponent } from './submited-cases.component';

describe('SubmitedCasesComponent', () => {
  let component: SubmitedCasesComponent;
  let fixture: ComponentFixture<SubmitedCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitedCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
