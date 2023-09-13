import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAeriePageComponent } from './about-aerie-page.component';

describe('AboutAeriePageComponent', () => {
  let component: AboutAeriePageComponent;
  let fixture: ComponentFixture<AboutAeriePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAeriePageComponent]
    });
    fixture = TestBed.createComponent(AboutAeriePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
