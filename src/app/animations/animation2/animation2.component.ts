import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, query, animateChild, group, animate, state } from '@angular/animations';

@Component({
  selector: 'app-animation2',
  templateUrl: './animation2.component.html',
  styleUrls: ['./animation2.component.scss'],
  animations: [
    trigger('changeState', [
      state('routing1', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('routing2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('*=>routing1', animate('300ms')),
      transition('*=>routing2', animate('2000ms'))
    ])]
})
export class Animation2Component implements OnInit {

  constructor() { }

  public ngOnInit() {
    console.log('Nano');
  }



}
