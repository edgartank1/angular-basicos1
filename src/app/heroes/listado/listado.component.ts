import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes:string[]=['Spiderman', 'Iroman','Hulk', 'Thor', 'Capitan'];

  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';


  }

  constructor() { }

  ngOnInit(): void {
  }

}
