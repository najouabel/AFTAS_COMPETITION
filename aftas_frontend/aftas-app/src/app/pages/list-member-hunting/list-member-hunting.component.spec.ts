import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemberHuntingComponent } from './list-member-hunting.component';

describe('ListMemberHuntingComponent', () => {
  let component: ListMemberHuntingComponent;
  let fixture: ComponentFixture<ListMemberHuntingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMemberHuntingComponent]
    });
    fixture = TestBed.createComponent(ListMemberHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
