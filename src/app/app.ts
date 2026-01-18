import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CounterApp');

  count: number= 0;

  // handleIncr(){
  //   this.count= this.count+1;
  // }

  // handleDecr(){
  //   if (this.count>0) {
  //     this.count= this.count-1;
  //   }
  // }

  // handleReset(){
  //   this.count= 0;
  // }

  handleCounter(val: string){
    if (val === '+') {
      this.count= this.count+1;
    } else if(val === '-' && this.count>0){
      this.count= this.count-1;
    } else{
      this.count=0;
    }
  }
}
