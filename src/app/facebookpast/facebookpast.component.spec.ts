import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookpastComponent } from './facebookpast.component';

describe('FacebookpastComponent', () => {
  let component: FacebookpastComponent;
  let fixture: ComponentFixture<FacebookpastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookpastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookpastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
