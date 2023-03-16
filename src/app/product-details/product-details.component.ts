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
  public superCoolList = [
    {name: 'Bulbasaur', id: 1},
    {name: 'Ivysaur', id: 2},
    {name: 'Venusaur', id: 3},
    {name: 'Charmander', id: 4},
  ]
  //idk what the fuck contructors do lol
  //like a use effe

  //lol fist thig thats loaded when this bitch goes it the constructor. it can grab basic state, or like how youve done. handle dependency injections 

  //no

  //this is mainly used for only dependency injection 
  // so you can grab things like the services or the router like you have
  constructor(private route: ActivatedRoute, private pokemonService: PokemonBullShitCall) { //fucking intellesence is dying lol //import that
  
    //logic would go here but its not the best practice 
    // okay  i meant for the use effect of the ngOnInit, but im not sure what this constrocture does
    //no biggie. in JS for OOP (object oriented Programing) its used to establish a class or to passs on an inheritance property
    //in this situation the inheretance is the activated route module.
    //you are setting it to a private variable to only be accessed from this class and giving it a name you want
    // let me follow you can change shit up and i can see how it works?
    //okay, just know I cant see any renering so im coding blind, but one sec
    //no worries, i just wanna see so i can get my head around it
    
    
    //im gonna make a service and make an "api call". Im going to inject it into this class (ProductDetailsComponent) and then call it in the onInit 

    //okay go for it
  }

  ngOnInit() {
    //thisa is the useEffect 
    // First get the product id from the current route.
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
    // // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);

    //call that bitch // this should be fetching into the pokemon api now in your console
    //subscribing is like hitting dial on a phone 
    //unsubbing is hanging up
    //if you have to many lines open you cant play WoW because the dialup is busy
    //sometimes youll have memeory leaks becasue a subscribe will answer everytime some logic changes for the specfic source
    //kinda like a 3-way call that just gets outta hand 

    //understood

    //I wouldnt get super wrapped up in learning it that deeply in terms of what the constructor does. youll 90% of the time only use it like we did for dependency injection. only occasionally will you ever want to run logic in it
    //most of the time your logic is on page load or on another lifecyscle hook
    //Angular is also super liquid in function creation due to its encapsulation and freedom here. React is a dick abnout the type of functios you can and cant make/bind to html eklements 
   this.pokemonService.getPokemon().subscribe(res => {
    console.log(res)
   })
  }

  doSomeWickedShit(){
    // when you click it the ngIf will decide if it renders or not in the html
    this.wickedShitPressed = !this.wickedShitPressed
  }
}

//better? 
// well the site is borken sooo.. im not sure what heppened
//el oh el
//open console and see whats being logged
//I also added a new module so you may have to re load the app with a close and npm run start or ng serve 
