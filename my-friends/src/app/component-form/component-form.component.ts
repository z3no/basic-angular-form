import { Component, OnInit } from '@angular/core';
import { Friend } from "../friend";

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

  constructor() { }

  ngOnInit(): void {
  }

}
