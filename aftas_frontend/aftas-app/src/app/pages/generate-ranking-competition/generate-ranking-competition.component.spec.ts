import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRankingCompetitionComponent } from './generate-ranking-competition.component';

describe('GenerateRankingCompetitionComponent', () => {
  let component: GenerateRankingCompetitionComponent;
  let fixture: ComponentFixture<GenerateRankingCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateRankingCompetitionComponent]
    });
    fixture = TestBed.createComponent(GenerateRankingCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
