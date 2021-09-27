import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAddModalComponent } from './parts-add-modal.component';

describe('PartsAddModalComponent', () => {
  let component: PartsAddModalComponent;
  let fixture: ComponentFixture<PartsAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
