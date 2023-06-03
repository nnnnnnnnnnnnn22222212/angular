import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleinforComponent } from './middleinfor.component';

describe('MiddleinforComponent', () => {
  let component: MiddleinforComponent;
  let fixture: ComponentFixture<MiddleinforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddleinforComponent]
    });
    fixture = TestBed.createComponent(MiddleinforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
