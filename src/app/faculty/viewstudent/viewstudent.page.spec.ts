import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewstudentPage } from './viewstudent.page';

describe('ViewstudentPage', () => {
  let component: ViewstudentPage;
  let fixture: ComponentFixture<ViewstudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
