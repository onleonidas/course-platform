import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SettingsComponent } from './settings.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { By } from '@angular/platform-browser';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given I am logged in as client “jose”', () => {

    const str = "teste unitario";
    console.log(str)
    /*
    const buttonElement = fixture.debugElement.query(By.css('.nomeclasse'));
    buttonElement.triggerEventHandler('click', null); 

    
    const auth = getAuth();
    const user = auth.currentUser;
    const name = user?.email
    expect(name).toBeTruthy();*/
  });

});
