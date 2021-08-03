
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pruebaMatIcons';


  constructor() {

    let delayInMilliseconds = 2000;
    setTimeout(function() {
      let elems = document.querySelectorAll<HTMLElement>(".myicon");
      for(let i=0; i <= elems.length; i++) {
        elems[i].style.opacity = "1";
      }
    }, delayInMilliseconds);

  }
  

}
