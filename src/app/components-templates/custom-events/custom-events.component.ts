import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {

  heros = [{"id":1,"name":"John","power":2612},
  {"id":2,"name":"Vernice","power":7036},
  {"id":3,"name":"Chrissie","power":3331},
  {"id":4,"name":"Tana","power":5158},
  {"id":5,"name":"Rawley","power":8948}];
  

  devs = [{"id":10, "name":"Raju", "power":4200},
  {"id":20, "name":"Jeelaga", "power": 1212},
  {"id":30, "name":"Rithvik", "power":12345},
  {"id":40, "name":"Anil", "power": 456789}];

  constructor() { }

  ngOnInit() {
  }

  delete(devObj) {
    console.log(devObj);
  }

}
