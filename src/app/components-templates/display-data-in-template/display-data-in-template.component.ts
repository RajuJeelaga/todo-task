import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template',
  template: `
    <h4>{{title}}</h4>
    <h4>one and only God is {{hero}}</h4>
  `,
  styleUrls: ['./display-data-in-template.component.css']
})
export class DisplayDataInTemplateComponent implements OnInit {

    title = 'Types of Persons';
    hero = 'Jesus';
  constructor() { }
  
  ngOnInit() {
  }

}
