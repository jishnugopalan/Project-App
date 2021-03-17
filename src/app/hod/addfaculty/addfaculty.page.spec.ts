import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddfacultyPage } from './addfaculty.page';

describe('AddfacultyPage', () => {
  let component: AddfacultyPage;
  let fixture: ComponentFixture<AddfacultyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfacultyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddfacultyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
