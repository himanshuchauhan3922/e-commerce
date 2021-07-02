import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegitableComponent } from './vegitable.component';
import { FruitModule } from '../fruit/fruit.module';




@NgModule({
  declarations: [VegitableComponent],
  imports: [
    CommonModule,
    FruitModule
    
  ],
  exports:[VegitableComponent]
})
export class VegitableModule { }
