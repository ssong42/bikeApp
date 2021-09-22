import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleOverviewComponent } from './bicycle-overview.component';

describe('BicycleOverviewComponent', () => {
  let component: BicycleOverviewComponent;
  let fixture: ComponentFixture<BicycleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicycleOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
