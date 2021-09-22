import { Component, AfterViewInit, Renderer2, OnInit } from "@angular/core";
import {WindyService} from '../services/windy.service'
const SCRIPT_PATH = 'https://api.windy.com/assets/map-forecast/libBoot.js';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
declare var $: any;

@Component({
  selector: 'app-windy',
  templateUrl: './windy.component.html',
  styleUrls: ['./windy.component.css']
})
export class WindyComponent implements AfterViewInit {
  capitals: string = '/assets/data/usa-capitals.geojson';
  tambol:string = '/assets/data/tambol_south.geojson';
  village:string = '/assets/data/village_south.geojson';
  amphore:string = '/assets/data/amphore_south.geojson';
  check_amphore:boolean=false;
  check_tambol:boolean=false;
  tambols:any
  villages:any
  amphores:any
  amphoreLayer:any
  tambolLayer:any
  geojsonMarkerOptions:any = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8}
  constructor( private renderer: Renderer2, private scriptService: WindyService,private http: HttpClient) { }

  ngAfterViewInit(): void {
  
    this.amphores=this.http.get(this.amphore);
    this.amphores.subscribe((amphore: any) => {
      this.amphoreLayer = L.geoJSON(amphore);    
    });

    this.tambols=this.http.get(this.tambol);
    this.tambols.subscribe((tambol: any) => {
      this.tambolLayer = L.geoJSON(tambol,{style:{
        color: 'red'
    }});    
    });

  }

  Showmenu(){      
    $(".drag-box-2").css("display", "block");
    $(".overlay-btn-showmenu").css("display", "none");
    }

  Amphoreshow(){
    if (! this.check_amphore) {
      this.amphoreLayer.addTo(this.scriptService.map);
      this.check_amphore =true
    }
    else{
      this.scriptService.map.removeLayer(this.amphoreLayer)
      this.check_amphore =false
    }
  }

  
  Tambolshow(){

    if (! this.check_tambol) {
      this.tambolLayer.addTo(this.scriptService.map);
      this.check_tambol =true
    }
    else{
      this.scriptService.map.removeLayer(this.tambolLayer)
      this.check_tambol =false
    }
  }

  ngOnInit(): void {
    const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);

    scriptElement.onload = () => {

      this.scriptService.initMap()
      // window.location.reload();
    }

    scriptElement.onerror = () => {

      console.log('Could not load the windy API Script!');

    }


  }

}
