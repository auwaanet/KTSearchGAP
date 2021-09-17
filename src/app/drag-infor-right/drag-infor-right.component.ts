import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-drag-infor-right',
  templateUrl: './drag-infor-right.component.html',
  styleUrls: ['./drag-infor-right.component.css']
})
export class DragInforRightComponent implements OnInit {

  cards:any = []
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
  constructor() { }

  showDetail(id:any){
    console.log(id);

    if($('#'+id).css("display")=='none'){
      $('#'+id).css("display", "block");
      $('#'+id+"_btn").text("Hide");
    }else{
      $('#'+id).css("display", "none");
      $('#'+id+"_btn").text("More");
    }

  }

  closeBtn(){
    $(".drag-box-2").css("display", "none");
  
  }
  eachfarm(i:any){
  }


  ngOnInit(): void {
    
    for (let index = 0; index < 4; index++) {
      this.cards.push(index)
    }
  }

}
