import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public ref: any;
  @Output('countEmited')
  countEmiter: EventEmitter<number> = new EventEmitter();
  public count: number = 0;
  public countArray: number[] = [];

  callRef() {
    this.ref = setInterval(() => {
      this.countEmiter.emit(this.count+=1);
      this.countArray.push(this.count);
    }, 1000)
  }

  stopRef(){
    clearInterval(this.ref);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
