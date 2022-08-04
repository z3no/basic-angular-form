import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
