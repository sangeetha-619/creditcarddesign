import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityoffersComponent } from './eligibilityoffers.component';

describe('EligibilityoffersComponent', () => {
  let component: EligibilityoffersComponent;
  let fixture: ComponentFixture<EligibilityoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
