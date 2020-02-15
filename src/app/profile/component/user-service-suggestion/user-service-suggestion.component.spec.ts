import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServiceSuggestionComponent } from './user-service-suggestion.component';

describe('UserServiceSuggestionComponent', () => {
  let component: UserServiceSuggestionComponent;
  let fixture: ComponentFixture<UserServiceSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserServiceSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserServiceSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
