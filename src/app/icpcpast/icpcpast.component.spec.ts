import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcpcpastComponent } from './icpcpast.component';

describe('IcpcpastComponent', () => {
  let component: IcpcpastComponent;
  let fixture: ComponentFixture<IcpcpastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcpcpastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcpcpastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
