import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor() { }
  nombre:any
  cedula:any
  email:any
  tarjeta:any
  nt:any

  ngOnInit(): void {
    this.recuperar()
  }
  recuperar(){
    this.nombre=localStorage.getItem('Nombre');
    // this.suma=2+parseInt(this.resultado)
    this.cedula=localStorage.getItem('Cédula');
    this.email=localStorage.getItem('Email');
    this.tarjeta=localStorage.getItem('Tarjeta de crédito');
    this.nt=localStorage.getItem('Numero de teléfono');
  }

}
