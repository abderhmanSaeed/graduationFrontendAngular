import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServiceSuggestionSingleComponent } from './user-service-suggestion-single.component';

describe('UserServiceSuggestionSingleComponent', () => {
  let component: UserServiceSuggestionSingleComponent;
  let fixture: ComponentFixture<UserServiceSuggestionSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserServiceSuggestionSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserServiceSuggestionSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
