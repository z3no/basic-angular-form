import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend } from "./friend"

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private _url: string = "http://localhost:9099/";

  constructor(private _http:HttpClient) {}

  public AddFriend(data : Friend) {
    return this._http.post(this._url+'allFriends', data);
  }

}
