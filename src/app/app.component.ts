import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public seconds = [];
  pushSeconds(event: {second: number}){
    this.seconds.push(event.second);
  }
}
