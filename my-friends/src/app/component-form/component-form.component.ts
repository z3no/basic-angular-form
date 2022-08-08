import {Component, OnInit} from '@angular/core';
import {Friend} from "../friend";
import {AddFriendService} from "../add-friend.service";

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.scss']
})

export class ComponentFormComponent implements OnInit {

  Languages = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'SQL',
    'TypeScript',
    'Python',
    'Java',
    'C#',
    'Ruby'
  ];

  friendModel = new Friend('', '', '', '', '');
  friendsUrl : string = 'http://localhost:9099/allFriends';
  private _allFriends:any;

  constructor(private _addFriendService:AddFriendService) {
  }

  ngOnInit(): void {
    this.getFriendsRequest(this.friendsUrl);
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.friendModel);
    const observable = this._addFriendService.AddFriend(this.friendModel);
    //console.log(observable);

    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log("Succes!");
        this.getFriendsRequest(this.friendsUrl);
      },
      error: (error) => {
        console.log(error);
        console.log('Failed');
      }
    });
  }

  public async getFriendsRequest(url:string) : Promise<any> {
    const response = await fetch(url, {method: 'GET', headers: {'Content-Type': 'application.json'}});
    this._allFriends = await response.json();
  }

  get allFriends(){
    return this._allFriends;
  }

}
