import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglefutureComponent } from './googlefuture.component';

describe('GooglefutureComponent', () => {
  let component: GooglefutureComponent;
  let fixture: ComponentFixture<GooglefutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglefutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglefutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
