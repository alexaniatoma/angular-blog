import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"
  
  @Input()
  cardTitle: string = "Saiu a nova versão do Angular"

  @Input()
  Id:string = "0"



  constructor() { }

  ngOnInit(): void {
  }

}
