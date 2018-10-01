import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // selector property which assigns string as a value.
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3{
    color:dodgerblue; 
    }
  `]
})
export class AppComponent {
  // title = 'my app'; // this value can be a dynamically added or can be any data from server.
}
