import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[]=['Spiderman','Iroman','Hulk','She Hukl','Thor'];
  public heroborrado?:string;



  removedLastHero():void{
    this.heroborrado=this.heroNames.pop();
    //this.heroborrado=heroeeliminado;
  }




}
