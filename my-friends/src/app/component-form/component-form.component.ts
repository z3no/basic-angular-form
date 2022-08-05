import { Component, OnInit } from '@angular/core';
import { Friend } from "../friend";
import { AddFriendService } from "../add-friend.service";

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

  constructor(private _addFriendService:AddFriendService) {

  }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.friendModel);
    const observable = this._addFriendService.AddFriend(this.friendModel);
    console.log(observable);

    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log("Succes!");
      },
      error: (error) => {
        console.log(error);
        console.log('Failed');
      }
    });
  }

}
