import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".map-active").css("color", "#4c75f2");

  }

}
