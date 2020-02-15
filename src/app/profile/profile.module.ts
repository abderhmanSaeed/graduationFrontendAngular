import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileContainerComponent } from "./container/profile-container/profile-container.component";
import { UserProfileComponent } from "./component/user-profile/user-profile.component";
import { UserServiceSuggestionComponent } from "./component/user-service-suggestion/user-service-suggestion.component";
import { UserServiceSuggestionSingleComponent } from "./component/user-service-suggestion-single/user-service-suggestion-single.component";

export const ROUTES: Routes = [
  {
    path: "profile",
    children: [
      { path: "", component: ProfileContainerComponent },
      { path: "TopServices", component: UserServiceSuggestionComponent }
    ]
  }
];
@NgModule({
  declarations: [
    ProfileContainerComponent,
    UserProfileComponent,
    UserServiceSuggestionComponent,
    UserServiceSuggestionSingleComponent
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class ProfileModule {}
