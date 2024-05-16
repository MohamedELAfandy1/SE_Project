import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesiterComponent } from './regesiter.component';

describe('RegesiterComponent', () => {
  let component: RegesiterComponent;
  let fixture: ComponentFixture<RegesiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegesiterComponent]
    });
    fixture = TestBed.createComponent(RegesiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
