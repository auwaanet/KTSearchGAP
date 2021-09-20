import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  windy(){
    this.Router.navigate(['windy'])
  .then(() => {
    window.location.reload();
  });
  }

  main(){
    this.Router.navigate([''])
  }

  map(){
    this.Router.navigate(['map'])
  }

}
