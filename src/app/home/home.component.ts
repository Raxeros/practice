import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('ltext', [
      state('in', style({ transform: 'translateY(0)'})),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(1200)
      ]),
      

    ]),trigger('rtext', [
      state('in', style({ transform: 'translateX(0)'})),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1200)
      ]),
      

    ]),
    
  ]

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
