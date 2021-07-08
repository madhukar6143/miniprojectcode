import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerearthComponent } from './hackerearth.component';

describe('HackerearthComponent', () => {
  let component: HackerearthComponent;
  let fixture: ComponentFixture<HackerearthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerearthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerearthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
