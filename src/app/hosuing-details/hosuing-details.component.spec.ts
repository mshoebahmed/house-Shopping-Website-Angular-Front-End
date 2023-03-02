import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosuingDetailsComponent } from './hosuing-details.component';

describe('HosuingDetailsComponent', () => {
  let component: HosuingDetailsComponent;
  let fixture: ComponentFixture<HosuingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosuingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosuingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
