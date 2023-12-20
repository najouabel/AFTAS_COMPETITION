import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberToRunkingComponent } from './add-member-to-runking.component';

describe('AddMemberToRunkingComponent', () => {
  let component: AddMemberToRunkingComponent;
  let fixture: ComponentFixture<AddMemberToRunkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMemberToRunkingComponent]
    });
    fixture = TestBed.createComponent(AddMemberToRunkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
