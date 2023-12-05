import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelsAdvertisingComponent } from './wheels-advertising.component';

describe('WheelsAdvertisingComponent', () => {
  let component: WheelsAdvertisingComponent;
  let fixture: ComponentFixture<WheelsAdvertisingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WheelsAdvertisingComponent]
    });
    fixture = TestBed.createComponent(WheelsAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
