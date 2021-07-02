import { Component, OnInit } from '@angular/core';
import { fruit } from './fruit';

import { vegitable } from './vegitable';

@Component({
  selector: 'app-vegitable',
  templateUrl: './vegitable.component.html',
  styleUrls: ['./vegitable.component.scss']
})
export class VegitableComponent implements OnInit {
  data=vegitable;
  fruit=fruit;
  public counter : number = 0;
  constructor() { }
  
  ngOnInit(): void {
    
    
  }
  
    
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    if(this.counter == 0){
      return
    }
    else {
      this.counter -= 1;

    }
      }
}
