import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-heros',
  templateUrl: './display-heros.component.html',
  styleUrls: ['./display-heros.component.css']
})
export class DisplayHerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero;

  @Output() deleteHeroEvent = new EventEmitter();

  deleteHero(hero) {
    this.deleteHeroEvent.emit(hero);
  }
}
