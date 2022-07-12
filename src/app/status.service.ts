import { Injectable } from "@angular/core";

@Injectable()
export class StatusService {
  accountStatus(status: string) {
    console.log("Server Status : " + status);
  }
}
