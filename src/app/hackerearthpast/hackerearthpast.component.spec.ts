import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerearthpastComponent } from './hackerearthpast.component';

describe('HackerearthpastComponent', () => {
  let component: HackerearthpastComponent;
  let fixture: ComponentFixture<HackerearthpastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerearthpastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerearthpastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
