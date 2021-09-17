import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapDashService {

  map:any;

  initMap(): void {
   this.map = L.map('map-dash', {
     center: [ 13.8, 100.5],
     zoom: 6,zoomControl: false
   });


   const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
     maxZoom: 30,
     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
   })
 // googleHybrid.setOpacity(10);

   const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&hl=th&x={x}&y={y}&z={z}', {
   maxZoom: 30,
   subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
   }).addTo(this.map);


   const googleTerrain = L.tileLayer('http://mt0.google.com/vt/lyrs=p&hl=th&x={x}&y={y}&z={z}', {
     maxZoom: 30,
     subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
   });

   const baseMaps = {
   'GoogleStreets': googleStreets,
   'Google Terrain': googleTerrain,
   'Google Hybrid': googleHybrid,
   }

   L.control.layers(baseMaps).addTo(this.map);


 }
  constructor() { }
}
