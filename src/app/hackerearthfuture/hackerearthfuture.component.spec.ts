import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerearthfutureComponent } from './hackerearthfuture.component';

describe('HackerearthfutureComponent', () => {
  let component: HackerearthfutureComponent;
  let fixture: ComponentFixture<HackerearthfutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerearthfutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerearthfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
