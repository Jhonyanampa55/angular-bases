import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  

  public heroNames:string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor']
  public herodelete?:string

  removeLastHero():void{
    this.herodelete=this.heroNames.pop();
  }


}
