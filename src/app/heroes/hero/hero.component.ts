import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string='ironman';
  public age:number=45;


  get capitalizedName():string{
    return this.name.toUpperCase()
  }


  getHeroDescription():string{    
    return `${ this.name } - ${ this.age}`
  }

  chagenHero():void{
    this.name='spiderman';
  }

  chagenAge():void{
    this.age=25;
  }

  resetform():void{
    this.name='ironman'
    this.age=45
  }


}
