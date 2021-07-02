import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
@Input()
data:any;
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
