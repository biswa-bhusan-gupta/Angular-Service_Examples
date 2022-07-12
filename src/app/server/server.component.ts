import { Component } from "@angular/core";
import { AccountService } from ".././account.service";
import { StatusService } from ".././status.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  constructor(
    private accountService: AccountService,
    private statusService: StatusService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.accountAdded(accountName, accountStatus);
    this.statusService.accountStatus(accountStatus);
  }
}
