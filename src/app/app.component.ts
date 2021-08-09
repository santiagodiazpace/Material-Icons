
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'pruebaMatIcons';

  constructor() {
  }
  
  ngOnInit() {

    cambiarOpacidadDelay();  // con delay de 2 seg
    cambiarOpacidad();       // al finalizar carga del documento

  }



}

// Cambia opacidad de iconos con delay de 2 seg

function cambiarOpacidadDelay() {
  let delayInMilliseconds = 2000;
  setTimeout(function() {
    let elems = document.querySelectorAll<HTMLElement>(".myicon");
    for(let i=0; i < elems.length; i++) {
      elems[i].style.opacity = "1";
    }
  }, delayInMilliseconds);
}

// Cambia opacidad de iconos al finalizar carga del documento

function cambiarOpacidad() {
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      let elems = document.querySelectorAll<HTMLElement>(".theicon");
      for(let i=0; i < elems.length; i++) {
        elems[i].style.opacity = "1";
      }
    }
  }
}


