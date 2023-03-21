import { Component } from '@angular/core';

import { products } from '../products';
import { PokemonBullShitCall } from '../product-details/pokemon.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  pokemon: Object | undefined;

  constructor( private pokemonService: PokemonBullShitCall) { 
 
  }

  ngOnInit() {
    const pokemon = this.pokemonService.getPokemon().subscribe(res => {
     return res
  
     })
      console.log(pokemon)

    this.pokemonService.getPokemon().subscribe(res => {
      this.pokemon = res
      console.log(this.pokemon)
  
     })
  
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('you will be notified when this product goes on sale')
  }
  

 
}

