import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglepastComponent } from './googlepast.component';

describe('GooglepastComponent', () => {
  let component: GooglepastComponent;
  let fixture: ComponentFixture<GooglepastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglepastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglepastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
