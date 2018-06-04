import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private timer;
  private second: number = 0;
  @Output('data') data: EventEmitter<{second: number}> = new EventEmitter();

  constructor() {
    this.timer = null;
   }

  ngOnInit() {
  }


  onStart() {
    this.timer = setInterval(() => {
      this.data.emit({second: this.second});
      this.second++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    this.second = 0;
  }
}
