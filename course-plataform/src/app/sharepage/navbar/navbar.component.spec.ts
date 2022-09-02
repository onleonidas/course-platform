import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register button when is not logged', fakeAsync(() => {

    let button = fixture.debugElement.nativeElement.querySelector('.button-register');
    expect(button.innerText).toBe("Start Your Journey");
  }));

  it('should login button when is not logged', fakeAsync(() => {

    let button = fixture.debugElement.nativeElement.querySelector('.button-login');
    expect(button.innerText).toBe("Login");
  }));

});
