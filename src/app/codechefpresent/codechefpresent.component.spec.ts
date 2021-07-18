import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodechefpresentComponent } from './codechefpresent.component';

describe('CodechefpresentComponent', () => {
  let component: CodechefpresentComponent;
  let fixture: ComponentFixture<CodechefpresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodechefpresentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodechefpresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
