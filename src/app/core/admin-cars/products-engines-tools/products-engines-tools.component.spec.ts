import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEnginesToolsComponent } from './products-engines-tools.component';

describe('ProductsEnginesToolsComponent', () => {
  let component: ProductsEnginesToolsComponent;
  let fixture: ComponentFixture<ProductsEnginesToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductsEnginesToolsComponent]
    });
    fixture = TestBed.createComponent(ProductsEnginesToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
