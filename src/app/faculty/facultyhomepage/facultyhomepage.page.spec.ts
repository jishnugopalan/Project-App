import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacultyhomepagePage } from './facultyhomepage.page';

describe('FacultyhomepagePage', () => {
  let component: FacultyhomepagePage;
  let fixture: ComponentFixture<FacultyhomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyhomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyhomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
