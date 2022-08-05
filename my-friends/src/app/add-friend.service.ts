import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private _http: HttpClient;

  constructor(http:HttpClient) {
    this._http = http;
  }

}
