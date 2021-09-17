import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.css']
})
export class MapSearchComponent implements OnInit {

  Query_ProvinceByID=''
  Query_Amphore=''
  Query_Tambol=''
  Query_Plant=''
  Query_Class=''
  Query_Category=''
  Query_Amphore_name=''


  AllProvince:any
  AllPlant :any
  AllClass :any
  AllGuildcategory: any;
  
  Amphore = [
  ];
  Tambol = [
  ];

  selected_total : Event[]= [
  ];


  selected_Province = [
  ];
  selected_plant = [
  ];
  selected_Class = [
  ];
  selected_category = [
  ];
  selected_AMPHOE= [
  ];
  selected_Tambol= [
  ];


  constructor() { }


  onAdd(event: Event) {

    this.selected_total.push(event)
}
searchBtn(){
  $(".drag-box").css("display", "block");
  $(".drag-box-2").css("display", "block");
}
  ngOnInit(): void {
  }

}
