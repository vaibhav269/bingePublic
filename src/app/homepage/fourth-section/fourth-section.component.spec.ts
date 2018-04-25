import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthSectionComponent } from './fourth-section.component';

describe('FourthSectionComponent', () => {
  let component: FourthSectionComponent;
  let fixture: ComponentFixture<FourthSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
