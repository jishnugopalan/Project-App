import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClasssharePage } from './classshare.page';

describe('ClasssharePage', () => {
  let component: ClasssharePage;
  let fixture: ComponentFixture<ClasssharePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasssharePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClasssharePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
