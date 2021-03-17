import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HodhomepagePage } from './hodhomepage.page';

describe('HodhomepagePage', () => {
  let component: HodhomepagePage;
  let fixture: ComponentFixture<HodhomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodhomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HodhomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
