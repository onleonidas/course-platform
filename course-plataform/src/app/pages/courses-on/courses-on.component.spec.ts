import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOnComponent } from './courses-on.component';

describe('CoursesOnComponent', () => {
  let component: CoursesOnComponent;
  let fixture: ComponentFixture<CoursesOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
