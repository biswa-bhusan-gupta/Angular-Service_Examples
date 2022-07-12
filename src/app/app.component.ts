import { Component } from "@angular/core";
import { AccountService } from "./account.service";
import { StatusService } from "./status.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  component = "App Component";

  constructor(
    private statusService: StatusService,
    private accountStatus: AccountService
  ) {}

  accounts: { name: string; status: string }[] = [];
  ngOnInit() {
    this.accounts = this.accountStatus.accounts;
  }
}
