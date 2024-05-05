import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../shared/heroes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  datos: Heroe={} as Heroe;
  heroes: Heroe[]=[]
  index: number=-1
  mensaje: string=""

  constructor(public servicio:HeroesService){
    this.heroes=this.servicio.getHeroes()
  }

  ver(aux:string){
    console.log("Estoy en el metodo ver "+aux);
    this.index=this.heroes.findIndex(p=>p.nombre===aux)
    console.log(this.index)

    if(this.index !==-1){
      this.datos=this.heroes[this.index];
      console.log(this.datos)
    } else{
      this.mensaje="Heroe no existe";
      console.log(this.mensaje)

      setTimeout(() => {
        this.mensaje="";
      }, 2000);
    }
  }


}
