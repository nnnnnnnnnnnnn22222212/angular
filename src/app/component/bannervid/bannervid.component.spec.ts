import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannervidComponent } from './bannervid.component';

describe('BannervidComponent', () => {
  let component: BannervidComponent;
  let fixture: ComponentFixture<BannervidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannervidComponent]
    });
    fixture = TestBed.createComponent(BannervidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
