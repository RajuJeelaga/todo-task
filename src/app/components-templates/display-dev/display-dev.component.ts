import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-dev',
  templateUrl: './display-dev.component.html',
  styleUrls: ['./display-dev.component.css']
})
export class DisplayDevComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() dev;

  @Output() deleteDevEvent = new EventEmitter(); 

  deleteDev(dev){
    this.deleteDevEvent.emit(dev);
  }
}
