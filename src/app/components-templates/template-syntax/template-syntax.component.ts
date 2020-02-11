import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  currentHero = {
    name: "Steven",
    power: 200
  };

  mywork = {
    name: "Developer",
    exp: 3
  }

  phone = "976543213";

  heroImageUrl = './assets/images/hero.jpg';

  formNotChanged = true;

  canSave = true;
  isUnchanged = false;
  isSpecial = false;
  working = true;
  
  classConditions =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial,
  };

  
// custom classes

  WPdev = true;
  UIdev = false;
  Angdev = true;
  reactdev = false;

  myProgram = {
    'wordpress' : this.WPdev,
    'ui' : !this.UIdev,
    'angdev' :this.Angdev,
    'react' : this.reactdev
  }

  updateHero() {
    this.currentHero = {
      name: "John",
      power: 500
    };
  }

  upadteHere() {
    this.mywork = {
      name: "Angular Developer",
      exp: 2
    };
  }


  getHeroimg(){
    return this.heroImageUrl;
  }

  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  mydevtool = 'This is my <script>alert("flow of my work")</script>Syntax';

  noOfColumns = 2;

  actionName = "Save";

  badCurly = 'different bad curly';

  myclassnm = "working classnm"

  special = true;

  currentStyles = {
    'font-style':  this.WPdev      ? 'italic' : 'normal',
    'font-weight': !this.UIdev ? 'bold'   : 'normal',
    'font-size':   this.reactdev    ? '24px'   : '12px'
  };

  nullHero = null;


  constructor() { }

  ngOnInit() {
  }

  getVal(){
    return 1;
  }




}
