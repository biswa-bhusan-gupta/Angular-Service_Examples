import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component"; // IMPORTING SERVER COMPONENT
import { CardComponent } from "./card/card.component"; // IMPORTING SERVER COMPONENT
import { AccountService } from "./account.service";
import { StatusService } from "./status.service";

@NgModule({
  declarations: [AppComponent, ServerComponent, CardComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [AccountService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule {}
