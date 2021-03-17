import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewsubmissionPage } from './viewsubmission.page';

describe('ViewsubmissionPage', () => {
  let component: ViewsubmissionPage;
  let fixture: ComponentFixture<ViewsubmissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubmissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewsubmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
