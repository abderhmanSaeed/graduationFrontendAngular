import { AuthService } from "./auth.service";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { AuthComponent } from "./auth/auth.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "auth/login",
        component: LoginComponent
      },
      { path: "auth/register", component: RegisterComponent }
    ])
  ],
  providers: [AuthService]
})
export class AuthModule {}
