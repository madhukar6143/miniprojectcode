import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookfutureComponent } from './facebookfuture.component';

describe('FacebookfutureComponent', () => {
  let component: FacebookfutureComponent;
  let fixture: ComponentFixture<FacebookfutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookfutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
