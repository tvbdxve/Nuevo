import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor() { }
  resultado:any
  mensaje:any

  ngOnInit(): void {
    this.recuperar()
  }
  recuperar(){
    this.resultado=localStorage.getItem('Nombre');
    // this.suma=2+parseInt(this.resultado)
    this.mensaje=localStorage.getItem('mensaje')
  }

}
