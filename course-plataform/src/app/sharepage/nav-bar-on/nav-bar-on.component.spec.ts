import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOnComponent } from './nav-bar-on.component';

describe('NavBarOnComponent', () => {
  let component: NavBarOnComponent;
  let fixture: ComponentFixture<NavBarOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
