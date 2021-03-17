import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadedfilePage } from './uploadedfile.page';

describe('UploadedfilePage', () => {
  let component: UploadedfilePage;
  let fixture: ComponentFixture<UploadedfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadedfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadedfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
