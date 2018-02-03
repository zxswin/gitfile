import { Injectable } from '@angular/core';
export class Hero {
  constructor(public id: number, public name: string) { }
}
let HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];
let heroesPromise = Promise.resolve(HEROES);
@Injectable()
export class HeroService {
  
  getHeroes() { 
    let arr=[1,3,4,5,6,7];
    let bbb=Promise.resolve(arr).then(v=>{
      console.log('ddd',v.find((a,b,c)=> a>6))
      v.find((a,b,c)=> a>6);
      console.log("vvv",v);
    });
    console.log("bbb",bbb);

    
   
    return heroesPromise; 
  }
  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}