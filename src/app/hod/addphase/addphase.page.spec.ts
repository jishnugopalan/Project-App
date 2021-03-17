import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddphasePage } from './addphase.page';

describe('AddphasePage', () => {
  let component: AddphasePage;
  let fixture: ComponentFixture<AddphasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddphasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
