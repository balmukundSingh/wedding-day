import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldiComponent } from './haldi.component';

describe('HaldiComponent', () => {
  let component: HaldiComponent;
  let fixture: ComponentFixture<HaldiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaldiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaldiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
