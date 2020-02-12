import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  currentdeveloper = {
    name: "Angular",
  };

  constructor() { }

  ngOnInit() {
  }
  setUpperCase(value) {
    this.currentdeveloper.name = value.toUpperCase();
  }

  printEvent(e) {
    console.log(e);
  }

  checkDeveloperName(){
      console.log(this.currentdeveloper.name);
  }
}
