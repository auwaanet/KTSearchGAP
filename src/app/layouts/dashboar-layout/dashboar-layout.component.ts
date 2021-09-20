import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboar-layout',
  templateUrl: './dashboar-layout.component.html',
  styleUrls: ['./dashboar-layout.component.css']
})
export class DashboarLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".main-active").css("color", "#4c75f2");

  }

}
