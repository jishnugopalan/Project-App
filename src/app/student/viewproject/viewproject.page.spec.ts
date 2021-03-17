import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewprojectPage } from './viewproject.page';

describe('ViewprojectPage', () => {
  let component: ViewprojectPage;
  let fixture: ComponentFixture<ViewprojectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprojectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewprojectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
