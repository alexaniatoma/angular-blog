import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://th.bing.com/th/id/OIP._TrUUnWP6-2THu9nBIYwtgHaHa?pid=ImgDet&rs=1"
  contentTitle:string="Minha notícia"
  contentDescription="Ola mundo"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("Id"))
    )
  }

}
