import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBicyclesComponent } from './your-bicycles.component';

describe('YourBicyclesComponent', () => {
  let component: YourBicyclesComponent;
  let fixture: ComponentFixture<YourBicyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourBicyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBicyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
