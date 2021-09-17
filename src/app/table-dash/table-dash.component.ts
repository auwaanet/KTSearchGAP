import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-dash',
  templateUrl: './table-dash.component.html',
  styleUrls: ['./table-dash.component.css']
})
export class TableDashComponent implements OnInit {
  ALLpolygon_2: string = "http://203.170.129.207/kasettrackservices_v2/PostSearchPlant_V4?province_id=ALL&plantid=ALL&ampor=ALL&classid=ALL&guildid=ALL&tambon=ALL&salestatus=ALL&stdatefrom=ALL&stdateto=ALL&endatefrom=ALL&endateto=ALL&percentfrom=ALL&percentto=ALL&ampor_id=ALL&tambon_id=ALL&growthtype=ALL&apikey=1212312121";
  data_dashboard:any;
  searchString:any
  filterMetadata = { count: 0 };
  constructor(private http:HttpClient) { }
  getdata_dashboard()
  {  this.http.post(this.ALLpolygon_2,{}).toPromise().then((data: any)=>{
    this.data_dashboard = data ;
  })
  }
  ngOnInit(): void {
    this.getdata_dashboard()

  }

}
