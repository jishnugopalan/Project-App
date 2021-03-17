import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignstudentsPage } from './assignstudents.page';

describe('AssignstudentsPage', () => {
  let component: AssignstudentsPage;
  let fixture: ComponentFixture<AssignstudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignstudentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignstudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
