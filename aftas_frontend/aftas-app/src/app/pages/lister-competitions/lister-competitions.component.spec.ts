import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCompetitionsComponent } from './lister-competitions.component';

describe('ListerCompetitionsComponent', () => {
  let component: ListerCompetitionsComponent;
  let fixture: ComponentFixture<ListerCompetitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerCompetitionsComponent]
    });
    fixture = TestBed.createComponent(ListerCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
