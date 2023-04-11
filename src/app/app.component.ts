import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'primera-app-angular';

  edadUno: number = 0;
  edadDos: number = 0;
  promedioEdad: number = 0;
  sumaEdad: number = 0;

  calcular() {
      this.sumar();
      this.promedio();
  }

promedio() {
  this.promedioEdad = (this.edadUno + this.edadDos) / 2;
}

sumar():void{
  this.sumaEdad = this.edadUno + this.edadDos;
}

limpiar() {
  this.edadUno = 0;
  this.edadDos = 0;
  this.promedioEdad = 0;
  this.sumaEdad = 0;
}
}
