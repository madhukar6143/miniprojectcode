import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingcalenderComponent } from './codingcalender.component';

describe('CodingcalenderComponent', () => {
  let component: CodingcalenderComponent;
  let fixture: ComponentFixture<CodingcalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingcalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
