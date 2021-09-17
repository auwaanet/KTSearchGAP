import { Component, AfterViewInit } from '@angular/core';
import {MapDashService} from '../services/map-dash.service'
import { HttpClient } from '@angular/common/http';
declare var L: any;

@Component({
  selector: 'app-map-dash',
  templateUrl: './map-dash.component.html',
  styleUrls: ['./map-dash.component.css']
})
export class MapDashComponent implements AfterViewInit {
  geojson:any
  geojson2={
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {"name":"a"},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                99.5361328125,
                17.31917640744285
              ],
              [
                100.37109375,
                17.31917640744285
              ],
              [
                100.37109375,
                17.8742034396575
              ],
              [
                99.5361328125,
                17.8742034396575
              ],
              [
                99.5361328125,
                17.31917640744285
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"b"},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                101.854248046875,
                17.014767530557833
              ],
              [
                102.601318359375,
                17.014767530557833
              ],
              [
                102.601318359375,
                17.5602465032949
              ],
              [
                101.854248046875,
                17.5602465032949
              ],
              [
                101.854248046875,
                17.014767530557833
              ]
            ]
          ]
        }
      }
    ]
  }

  point1 = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {"name":"b"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            102.227783203125,
            17.29819876772391
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"a"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            100.008544921875,
            17.56548361143177
          ]
        }
      }
    ]
  }
  geojson_point:any
  search_control:any;


  constructor(private MapService:MapDashService,private http: HttpClient) { }
  ngAfterViewInit(): void {
    const onEachFeature = (f:any, l:any) => {


      let div_container_img = document.createElement('div'); 
      div_container_img.classList.add('container-img');
      let div_cards = document.createElement('div'); 
      div_cards.classList.add('cards');
      div_container_img.appendChild(div_cards);
      let div_imgBx = document.createElement('div'); 
      div_imgBx.classList.add('imgBx');
      div_cards.appendChild(div_imgBx);
      let img = document.createElement('img'); 
      img.setAttribute("src", "http://203.170.129.207/kasettrackservices_v2/images/Avatar/"+"Avatar_20200929025146_.jpg");
      div_imgBx.appendChild(img);
      let div_content = document.createElement('div'); 
      div_content.classList.add('content');
      div_cards.appendChild(div_content);
      let div_details= document.createElement('div'); 
      div_details.classList.add('details');
      div_content.appendChild(div_details);
      let div_h2= document.createElement('h2'); 
      // div_h2.innerHTML = f.properties.name+"<br /><span><"+f.properties.name+">Senior Designer</span>"
      div_h2.innerHTML = f.properties.name+"<br /><span><a href=#/windy/weather/"+f.properties.name+"_14.749081_101.358396_251"+">ดูสภาพอากาศ </a></span>"

      div_details.appendChild(div_h2);
      l.bindPopup(div_container_img, {closeOnClick: false, autoClose: false});

      
    }
    this.MapService.initMap()

    this.geojson = this.geojson2
    let geojson_layer = L.geoJSON(this.geojson, {
			onEachFeature: onEachFeature
		});
    this.MapService.map.addLayer(geojson_layer);

    let geojson_Point = L.geoJSON(this.point1, {
		});



		var markers = L.markerClusterGroup();
		markers.addLayer(geojson_Point);
		
		this.MapService.map.addLayer(markers);

    this.MapService.map.fitBounds(geojson_layer.getBounds());

  }

}
