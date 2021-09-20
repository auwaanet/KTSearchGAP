import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-map-windy',
  templateUrl: './map-windy.component.html',
  styleUrls: ['./map-windy.component.css']
})
export class MapWindyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".windy-active").css("color", "#4c75f2");

  }

}
