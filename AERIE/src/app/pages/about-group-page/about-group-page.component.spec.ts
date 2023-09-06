import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGroupPageComponent } from './about-group-page.component';

describe('AboutGroupPageComponent', () => {
  let component: AboutGroupPageComponent;
  let fixture: ComponentFixture<AboutGroupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutGroupPageComponent]
    });
    fixture = TestBed.createComponent(AboutGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
