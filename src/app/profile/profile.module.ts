import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileContainerComponent } from "./container/profile-container/profile-container.component";

export const ROUTES: Routes = [
  {
    path: "profile",
    children: [
      { path: "", component: ProfileContainerComponent, pathMatch: "full" }
    ]
  }
];
@NgModule({
  declarations: [ProfileContainerComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class ProfileModule {}
