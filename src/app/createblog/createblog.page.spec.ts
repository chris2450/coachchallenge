import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateblogPage } from './createblog.page';

describe('CreateblogPage', () => {
  let component: CreateblogPage;
  let fixture: ComponentFixture<CreateblogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateblogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateblogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
