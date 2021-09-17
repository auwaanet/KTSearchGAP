import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import * as turf from '@turf/turf';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Geocoder from 'leaflet-control-geocoder';
import  '@geoman-io/leaflet-geoman-free';

@Component({
  selector: 'app-add-poly',
  templateUrl: './add-poly.component.html',
  styleUrls: ['./add-poly.component.css']
})
export class AddPolyComponent implements AfterViewInit {

  constructor() { }
  map:any;
  geoshow:any
  center_polygon_lat:any
  center_polygon_lng:any
  area_polygon:any
  rai:any
  ngan:any
  sqWa:any
  geocreate:any
  login_id= new FormControl()
  show= new FormControl()
  api:any ="http://203.170.129.207/kasettrackservices_v2/AddPolygon_v2?apikey=1212312121"
  
    
    show_geo() {
        if (this.geocreate&& this.show.value && this.login_id.value) {
          console.log(JSON.stringify(this.geocreate)); 
          console.log(this.area_polygon);
          console.log(this.center_polygon_lat)
          console.log(this.center_polygon_lng);
          console.log(this.login_id.value)
          console.log(this.show.value);
          let new_post = this.api+"&jsonstringtemp="+JSON.stringify(this.geocreate)+"&loginid="+this.login_id.value+"&Lat="+this.center_polygon_lat+"&Lng="+this.center_polygon_lng+"&polygonsize="+this.area_polygon+"&show="+this.show.value
          console.log(new_post);
          // this.Http.post(new_post,{}, { responseType: 'text' }).subscribe(data => {
          //     console.log(JSON.stringify(data));
              
          // })
  
        }
        else{
            alert('ไม่ได้วาดหรือกรอกไอดีหรือการแสดงผล')
        }
  
    }
  
  
  
    private initMap(): void {
      this.map =L.map('mapid').setView([13.5, 100.5], 6);
  
  
      const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      })
    
  
      const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=y&hl=th&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(this.map);
  
      const baseMaps = {
    'Google Hybrid': googleHybrid,
    'GoogleStreets': googleStreets
  }
  
  L.control.layers(baseMaps).addTo(this.map);
  
  
  const GeocoderControl = new Geocoder({
    defaultMarkGeocode: false
  });
GeocoderControl.addTo(this.map);
GeocoderControl.on('markgeocode', function (e) {
    let bbox = e.geocode.bbox;
    let poly = L.polygon([
      bbox.getSouthEast(),
      bbox.getNorthEast(),
      bbox.getNorthWest(),
      bbox.getSouthWest()
    ])

    addTomap(poly)

});


    const addTomap = (poly:any) => {
    this.map.fitBounds(poly.getBounds());    
}

  
  this.map.pm.addControls({
    position: 'topleft',
    drawCircle: false,
    drawMarker: false,
    drawCircleMarker: false,
    drawRectangle: false,
    drawPolyline: false,
    rotateMode: false,
    dragMode: false,
    cutPolygon: false,
    // drawPolygon: false
  });
  
  let distance_layer = L.layerGroup();
  
  // this.map.on('pm:remove', (e:any) => {
  //     console.log(e);
      
  //   });
  
  
  this.map.on('pm:drawstart', (e:any) => {
      let point_group:any = []
      e.workingLayer.on('pm:vertexadded', (e:any) => {
          // console.log(e.latlng);
          point_group.push(e.latlng)
          // console.log(point_group);
          if (point_group.length > 1) {
              const center_dis_json = Create_distance_Json(point_group, 1)
              // console.log(center_dis_json);
              
              distance_layer.clearLayers()
              
  
              var pointLayer = L.geoJSON(center_dis_json, {
                  pointToLayer: function(feature, latlng) {
                      const label = String((feature.properties.distance_km).toFixed(3)) + " km." // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
                      return new L.CircleMarker(latlng, {
                          radius: 1,
                      }).bindTooltip(label, { permanent: true, className: "my-labels" }).openTooltip();
                  }
              });
  
              pointLayer.addTo(distance_layer)
              distance_layer.addTo(this.map)
              
          }
      });
  
  });
  
  this.map.on('pm:globalremovalmodetoggled', (e:any) => {
      console.log(e);
    });
  
  this.map.on('pm:remove', (e:any) => {
      this.geoshow=[];
      this.geocreate = [];
      this.center_polygon_lat=0;
      this.center_polygon_lng=0;
      this.area_polygon = 0;
      this.rai= 0;
      this.ngan= 0;
      this.sqWa= 0;
      distance_layer.clearLayers();
  });
  
  
  
  this.map.on('pm:create', (e:any) => {
  
      let center_dis_json = Create_distance_Json(e.layer._latlngs[0])
      this.geocreate = e.layer._latlngs[0]
      this.area_polygon =turf.area(e.layer.toGeoJSON())
      this.rai= (this.area_polygon/1600)| 0;
      this.ngan= ((this.area_polygon % 1600) / 400)| 0;
      this.sqWa= ((this.area_polygon / 4) - ((this.rai * 400) + (this.ngan * 100))).toFixed(2);
  
      this.center_polygon_lat=(turf.centroid(e.layer.toGeoJSON())).geometry.coordinates[1]
      this.center_polygon_lng=(turf.centroid(e.layer.toGeoJSON())).geometry.coordinates[0]
  
      
  
      e.layer.on('pm:edit', (e:any) => {
          distance_layer.clearLayers()
          center_dis_json = Create_distance_Json(e.layer._latlngs[0])
          this.geocreate = e.layer._latlngs[0]
          this.area_polygon =turf.area(e.layer.toGeoJSON())
          this.rai= (this.area_polygon/1600)| 0;
          this.ngan= ((this.area_polygon % 1600) / 400)| 0;
          this.sqWa= ((this.area_polygon / 4) - ((this.rai * 400) + (this.ngan * 100))).toFixed(2);
          this.center_polygon_lat=(turf.centroid(e.layer.toGeoJSON())).geometry.coordinates[1]
          this.center_polygon_lng=(turf.centroid(e.layer.toGeoJSON())).geometry.coordinates[0]
  
  
  
          var pointLayer = L.geoJSON(center_dis_json, {
              pointToLayer: function(feature, latlng) {
                  const label = String((feature.properties.distance_km).toFixed(3)) + " km." // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
                  return new L.CircleMarker(latlng, {
                      radius: 1,
                  }).bindTooltip(label, { permanent: true, className: "my-labels" }).openTooltip();
              }
          });
          this.geoshow=center_dis_json
          pointLayer.addTo(distance_layer)
          distance_layer.addTo(this.map)
  
  
      });
  
      distance_layer.clearLayers()
      var pointLayer = L.geoJSON(center_dis_json, {
          pointToLayer: function(feature, latlng) {
              const label = String((feature.properties.distance_km).toFixed(3)) + " km." // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
              return new L.CircleMarker(latlng, {
                  radius: 1,
              }).bindTooltip(label, { permanent: true, className: "my-labels" }).openTooltip();
          }
      });
      this.geoshow=center_dis_json
      pointLayer.addTo(distance_layer)
      distance_layer.addTo(this.map)
  
  
  });
  
  
  
  
  function Create_distance_Json(layer:any, n = 0) {
      const center_list:any = [];
      for (let index = 0; index < layer.length - n; index++) {
          if (index == layer.length - 1) {
              const star_point = [layer[index].lng, layer[index].lat]
              const stop_point = [layer[0].lng, layer[0].lat]
              const from = turf.point(star_point);
              const to = turf.point(stop_point);
              const distance = turf.distance(from, to);
              const features = turf.points([star_point, stop_point]);
              const center = turf.center(features);
              center.properties = {"distance_km":distance};
              center.type = 'Feature' as any ;
              center.geometry.type = 'Point' as any ;
              center_list.push(center)
          } else {
  
            const star_point = [layer[index].lng, layer[index].lat]
            const stop_point = [layer[index + 1].lng, layer[index + 1].lat]
            const from = turf.point(star_point);
            const to = turf.point(stop_point);
            const distance = turf.distance(from, to);
            const features = turf.points([star_point, stop_point]);
            const center = turf.center(features);
            center.properties = {"distance_km":distance};
            center.type = 'Feature' as any ;
            center.geometry.type = 'Point' as any ;
  
            // console.log(distance);
            center_list.push(center)
          }
      }
      return center_list 
  }
  
  
  
  }
  
  
  
    ngAfterViewInit(): void {
      this.initMap()
  
    }

}
