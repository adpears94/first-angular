import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { PokemonBullShitCall } from './pokemon.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  wickedShitPressed: boolean = false;
  pokemon: any;
  public superCoolList = [
    {name: 'Bulbasaur', id: 1},
    {name: 'Ivysaur', id: 2},
    {name: 'Venusaur', id: 3},
    {name: 'Charmander', id: 4},
  ]

  constructor(private route: ActivatedRoute, private pokemonService: PokemonBullShitCall) { 
 
  }

  ngOnInit() {
    
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
    
    this.product = products.find(product => product.id === productIdFromRoute);

    

   this.pokemonService.getPokemon().subscribe(res => {
    this.pokemon = res;
    // console.log(this.pokemon.results)

   })
  
  }
  

  doSomeWickedShit(){
    // when you click it the ngIf will decide if it renders or not in the html
    this.wickedShitPressed = !this.wickedShitPressed
  }
}
