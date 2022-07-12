import { Component, Input } from "@angular/core";
import { AccountService } from ".././account.service";
import { StatusService } from ".././status.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  component = "Card Component";
  @Input("account") data: { name: string; status: string };
  @Input() id: number;

  constructor(
    private statusService: StatusService,
    private accountStatus: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountStatus.changeStatus(status, this.id);
    this.statusService.accountStatus(status);
  }
}
