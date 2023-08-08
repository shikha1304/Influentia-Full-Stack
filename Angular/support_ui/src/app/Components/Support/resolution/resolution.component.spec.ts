import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionComponent } from './resolution.component';

describe('ResolutionComponent', () => {
  let component: ResolutionComponent;
  let fixture: ComponentFixture<ResolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolutionComponent]
    });
    fixture = TestBed.createComponent(ResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
