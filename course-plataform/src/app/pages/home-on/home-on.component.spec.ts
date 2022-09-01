import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnComponent } from './home-on.component';

describe('HomeOnComponent', () => {
  let component: HomeOnComponent;
  let fixture: ComponentFixture<HomeOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
