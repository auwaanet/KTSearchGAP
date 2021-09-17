import { Injectable } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
declare const windyInit: any;
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class WindyService {
  map:any;
  constructor(@Inject(DOCUMENT) private document: Document
  ) { }

   

 /**

  * Append the JS tag to the Document Body.

  * @param renderer The Angular Renderer

  * @param src The path to the script

  * @returns the script element

  */

  public loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {

    const script = renderer.createElement('script');

    script.type="text/javascript";

    script.src = src;

    renderer.appendChild(this.document.body, script);

    return script;

  }

  initMap(): void {
  
    const options = {
      key: '1C8LUnYyLkMKeBom0tyHWncRd39QOo4L', // REPLACE WITH YOUR KEY !!!
      lat: 13.736717,
      lon: 100.523186,
      zoom: 5,
    };


  
    windyInit(options, (windyAPI: any) => {
        const { map } = windyAPI;
        this.map = map;
        // console.log(this.map);
        this.map.options.minZoom = 4;
        this.map.options.maxZoom = 30;

        // this.MakePolygonService.getTambol(map)


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

      map.on('zoomend', function() {
        if (map.getZoom() >= 12) {
          googleHybrid.setOpacity(1);
        } else {
          googleHybrid.setOpacity(0);
        }
    });

    
    });


   
    
  };
}
