import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string='iroman';
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroe(){
    this.name='spiderman';
  }

  changeAge(){
    this.age=18;
  }

  resetForm(){
    this.name='Iroman';
    this.age=45
  }

}
