import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcpcComponent } from './icpc.component';

describe('IcpcComponent', () => {
  let component: IcpcComponent;
  let fixture: ComponentFixture<IcpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
