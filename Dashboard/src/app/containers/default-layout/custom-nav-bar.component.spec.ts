import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavBarComponent } from './custom-nav-bar.component';

describe('CustomNavBarComponent', () => {
  let component: CustomNavBarComponent;
  let fixture: ComponentFixture<CustomNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
