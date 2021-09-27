import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsViewModalComponent } from './parts-view-modal.component';

describe('PartsViewModalComponent', () => {
  let component: PartsViewModalComponent;
  let fixture: ComponentFixture<PartsViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
