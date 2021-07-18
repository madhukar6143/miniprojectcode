import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeforcespastComponent } from './codeforcespast.component';

describe('CodeforcespastComponent', () => {
  let component: CodeforcespastComponent;
  let fixture: ComponentFixture<CodeforcespastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeforcespastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeforcespastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
