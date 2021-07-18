import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodechefpastComponent } from './codechefpast.component';

describe('CodechefpastComponent', () => {
  let component: CodechefpastComponent;
  let fixture: ComponentFixture<CodechefpastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodechefpastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodechefpastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
