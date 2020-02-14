import { ProfileModule } from "./profile/profile.module";
import { AuthModule } from "./auth/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { WelcomeComponent } from "./welcome/welcome/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, ProfileModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
