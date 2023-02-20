import { Injectable } from '@angular/core';
import { ResponseI} from '../../modelos/response.interface';
import { ListaPokemonI } from '../../modelos/listapokemon.interface';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  url:string = "https://pokeapi.co/api/v2/pokemon/";
  constructor(private http:HttpClient) { 
    console.log('Servicio HTTP');
  }

  ObtenerPokemones():Observable<ListaPokemonI[]>{
  //ObtenerPokemones(pagina:number):any{
   // let direccion = this.url  + pagina;
    let direccion = this.url;
    return this.http.get<ListaPokemonI[]>(direccion);
    //return this.http.get(direccion);
  }
}
