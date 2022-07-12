import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testaccount",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  accountAdded(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }
  changeStatus(status: string, id: number) {
    this.accounts[id].status = status;
  }
}
