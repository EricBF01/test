import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../shared/heroes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {
  heroes: Heroe[]=[]

  constructor(public servicio: HeroesService){
    this.heroes=this.servicio.getHeroes()

  }

}
