import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentregistrationPage } from './studentregistration.page';

describe('StudentregistrationPage', () => {
  let component: StudentregistrationPage;
  let fixture: ComponentFixture<StudentregistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentregistrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentregistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
