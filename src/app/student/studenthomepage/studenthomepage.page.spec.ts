import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudenthomepagePage } from './studenthomepage.page';

describe('StudenthomepagePage', () => {
  let component: StudenthomepagePage;
  let fixture: ComponentFixture<StudenthomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenthomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudenthomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
