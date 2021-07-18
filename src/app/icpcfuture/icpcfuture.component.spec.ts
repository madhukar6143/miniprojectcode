import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcpcfutureComponent } from './icpcfuture.component';

describe('IcpcfutureComponent', () => {
  let component: IcpcfutureComponent;
  let fixture: ComponentFixture<IcpcfutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcpcfutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcpcfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
