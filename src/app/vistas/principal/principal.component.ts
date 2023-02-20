import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListaPokemonI } from '../../modelos/listapokemon.interface';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  
  constructor(private api:ApiService, private router:Router){}

  pokemones: ListaPokemonI[] = [];
  //pokemones: any = [];

  

  ngOnInit():void{
    //this.api.ObtenerPokemones(1).subscribe(data =>{
    this.api.ObtenerPokemones().subscribe(data =>{
      console.log(data);
      this.pokemones = data;
    })
  }

}
