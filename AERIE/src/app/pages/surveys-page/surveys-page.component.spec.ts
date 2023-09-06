import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysPageComponent } from './surveys-page.component';

describe('SurveysPageComponent', () => {
  let component: SurveysPageComponent;
  let fixture: ComponentFixture<SurveysPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveysPageComponent]
    });
    fixture = TestBed.createComponent(SurveysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
