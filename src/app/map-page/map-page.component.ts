import { Component, AfterViewInit } from '@angular/core';
import {MapServiceService} from '../services/map-service.service'
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements AfterViewInit {
  
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
    fillOpacity: 0.8
};

  constructor(private MapService:MapServiceService,private http: HttpClient) { }
  Amphoreshow(){
    if (! this.check_amphore) {
      this.amphoreLayer.addTo(this.MapService.map);
      this.check_amphore =true
    }
    else{
      this.MapService.map.removeLayer(this.amphoreLayer)
      this.check_amphore =false
    }
  }

  
  Tambolshow(){

    if (! this.check_tambol) {
      this.tambolLayer.addTo(this.MapService.map);
      this.check_tambol =true
    }
    else{
      this.MapService.map.removeLayer(this.tambolLayer)
      this.check_tambol =false
    }
    console.log("Amphoreshow");
  }
  ngAfterViewInit(): void {
    this.MapService.initMap()

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


}
