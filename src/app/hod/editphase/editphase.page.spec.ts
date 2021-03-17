import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditphasePage } from './editphase.page';

describe('EditphasePage', () => {
  let component: EditphasePage;
  let fixture: ComponentFixture<EditphasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditphasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditphasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
