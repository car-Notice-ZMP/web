import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInformationComponent } from './full-information.component';

describe('FullInformationComponent', () => {
  let component: FullInformationComponent;
  let fixture: ComponentFixture<FullInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
