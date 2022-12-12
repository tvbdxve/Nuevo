import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }
  nom:string
  ema:string
  pass:number
  cdl:number
  numt:number

  ngOnInit(): void {
    //this.numero=0;
    //localStorage.clear;
  }

  almacenar(){
    localStorage.setItem('Nombre', this.nom)
    localStorage.setItem('Cédula', this.cdl.toString())
    localStorage.setItem('Email', this.ema)
    localStorage.setItem('Tarjeta de crédito', this.pass.toString())
    localStorage.setItem('mensaje', 'almacenamiento')

  }

}
