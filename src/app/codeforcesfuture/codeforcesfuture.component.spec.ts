import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeforcesfutureComponent } from './codeforcesfuture.component';

describe('CodeforcesfutureComponent', () => {
  let component: CodeforcesfutureComponent;
  let fixture: ComponentFixture<CodeforcesfutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeforcesfutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeforcesfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
