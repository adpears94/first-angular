//grabbing boiler plate code 
import { APP_INITIALIZER, Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { dosDateTimeToDate } from 'yauzl';

@Injectable({providedIn: 'root'})
export class PokemonBullShitCall {
    constructor(private http: HttpClient) { }
    
    getPokemon(){
        return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=100');
    }
}

//its working
//lol auto shit tossed some wil varuiable names in on the html 
//yuhh had to restart the server for it to recognize the path
//sweet, I know that was probably alot, but I wanted to try to relate react stuff to angular things for you
//i mean im still lost as fuck comparied to react,, but this has helped me a great deal so far   it is just such a different framework and im not used to classcial oop
//yeah man, it takes some getting used to for sure. Youll get it though and I PROMISE you wont want to go back lol
//this shit is very structured and takes alot of the "wtf is blown up" out of it 
//well.. im only skilled in react, but once i fugure this shit out im sure ill feel the same way. 
//without a doubt man. its difficult and your like a day in and have an app up and running...that alone is a win for angular lol
// lol! well i would never be able to figure any of this shit out without you brother.   so let your boss know that you are a wizard and also i did this in a day lol
///lmfaooo thanks man. Im the dumbes dude on my team LOL but my mentor is 10+ years and his is 37+ years in. I promise you are lightyears ahead of the average new hire.....they are fucking trash
//jesus christ let the fucking rest of the hiring field know that
// but bet dude  im still trying to learn all of this shit so i can atleast be adept to coding when i get a job

//this market is just shit too though. youll be fine. Id focus mainly on Leetcode...and I hate even saying that shit as this is a real skill and it IS NOT, but its the boss and you have to play the game. I cant imagine youd  l
//let a small ass "reverse a string" get in the way of making 6 figs...
//facts
//well fuck as long as i can get a goddamn codeing interview, this market is so fucking saturated right now that dudes with 10+ years of dev exp are applying for junior positions

//very true man. Id spread myself out if I where you too. not just big tech companies. Hit Homedepot...they are litterally hiring SwE right now lol
//not the flashiest, b
/*
// eatc shit ill type over you
there no more double lines 

//but bro ive been filing out over like 600+ applications now and there all whores who have been infuluenced by those devs who have taht exp


yeah man, its trash right now. hell I applied to 17 jobs in VMware and got demnied for em all except one. itll happen, its just gonna take some time. hopefully with a reffereal you can at least get a foot in the door
L3Harris is another huge one and you have a clearance 

bro.. well i havent actually tried l3 or northrop i just want a job that i code and live my life without the DoD or DoE or anything
but also want paid
just smoke week and code...alll fucking day lol

you been hitting the reggie?



Does dolly Parton sleep on her back? - or however you spell that big tittied bitches name
YASSSSSSSSSS
You can always hit up SMT...I know its shit pay wise, but itll get your foot in the door and get you some YoE in this shit economy 
Silicon Mountain Technologies 

Garcia can get you in the door there really quick, starting pay is gonna be around 70-80 and your gonna need to learn Java lol but no real coding interviews and mainly just behavioral 

bet i look them up aswell
yo.. fuck java lol so fucking agree lol
java is absolute dogshit
but fuck dude
ive been learning c++ shits trash too lol
absolutely
but so many apps want c++ or c#


its a core language man. its also really good, I just fucking hate that kinda shit. let me make things move and do cool things...not worry about a garbage collector being coded effeciently 
brehh.. i feel the same way i feel like im minuplating data at a kindergarden level lol


when you get stuck again, ping me. I need to finish up this ingestion file before EoD tomorrow and Im about 90% done. just testing and coding error handling in lol.  

no worries dude, if you have any time to help me with this angular shit im sure your explinations would go way furter than the docs.  
for sure man. just let me klnow when you get stuck again and I can help...brain stopped working there for a second lol
bet dude, thanks man your the homie B00B 8===>



agreed, but using these classes in Angular is gonna make it a breeze to swap between those and any C, Mobile app dev, etc


I feel that in my core lol



*/ 
