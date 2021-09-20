import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jvm: any;
declare var ApexCharts: any;

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
countbarfill=0
  constructor() { }

  ngOnInit(): void {
        ////////barfiller
        if ($('.barfiller').length > 0)
        {
        $(".barfiller").each( () => {    
          this.countbarfill+=1
          let barfill = "#barfiller"+this.countbarfill
            $(barfill).barfiller({barColor: $(barfill).data('color')});
        });
        this.countbarfill=1}
        ////////barfiller

/////////////////////////////////// Mixed Chart /////////////////////
var theme = 'light';
if ($('body').hasClass('dark')) {
    theme = 'dark';
}
if ($('body').hasClass('dark-alt')) {
    theme = 'dark';
}
let options = {
  theme: {
      mode: theme
  },
  chart: {
      height: 350,
      type: 'line',
      stacked: false,
      dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    }
  },
  stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
  },
  plotOptions: {
      bar: {
          columnWidth: '50%'
      }
  },
  colors: ['#3A5794', '#A5C351', '#E14A84'],
  series: [{
          name: 'Facebook',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
          name: 'Vine',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
          name: 'Dribbble',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
  fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
      }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
  markers: {
      size: 0
  },
  xaxis: {
      type: 'datetime'
  },
  yaxis: {
      min: 0
  },
  tooltip: {
      shared: true,
      intersect: false,
      y: {
          formatter: function (y:any) {
              if (typeof y !== "undefined") {
                  return  y.toFixed(0) + " views";
              }
              return y;

          }
      }
  },
  legend: {
      labels: {
          useSeriesColors: true
      },

  }
}

var chart = new ApexCharts(
      document.querySelector("#apex_mixed_chart"),
      options
      );

chart.render();


/////////////////////////////////// Candlestick Chart /////////////////////

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    /**
     * Chart design taken from Samsung health app
     */
    
    chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.paddingBottom = 30;
    
    chart.data = [{
        "name": "Monica",
        "steps": 45688,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg"
    }, {
        "name": "Joey",
        "steps": 35781,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg"
    }, {
        "name": "Ross",
        "steps": 25464,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg"
    }, {
        "name": "Phoebe",
        "steps": 18788,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg"
    }, {
        "name": "Rachel",
        "steps": 15465,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg"
    }, {
        "name": "Chandler",
        "steps": 11561,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg"
    }];
    
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.strokeOpacity = 0.1;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.labels.template.dy = 35;
    categoryAxis.renderer.tooltip.dy = 35;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.fillOpacity = 0.3;
    valueAxis.renderer.grid.template.strokeOpacity = 0.1;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = true;
    valueAxis.renderer.baseGrid.strokeOpacity = 0.1;
    
    var series = chart.series.push(new am4charts.ColumnSeries);
    series.dataFields.valueY = "steps";
    series.dataFields.categoryX = "name";
    series.tooltipText = "{valueY.value}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.dy = - 6;
    series.columnsContainer.zIndex = 100;
    
    var columnTemplate = series.columns.template;
    columnTemplate.width = am4core.percent(50);
    columnTemplate.maxWidth = 66;
    columnTemplate.column.cornerRadius(60, 60, 10, 10);
    columnTemplate.strokeOpacity = 0;
    
    series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueY", min: am4core.color("#e5dc36"), max: am4core.color("#5faa46") });
    series.mainContainer.mask = undefined;
    
    var cursor = new am4charts.XYCursor();
    chart.cursor = cursor;
    cursor.lineX.disabled = true;
    cursor.lineY.disabled = true;
    cursor.behavior = "none";
    
    var bullet = columnTemplate.createChild(am4charts.CircleBullet);
    bullet.circle.radius = 30;
    bullet.valign = "bottom";
    bullet.align = "center";
    bullet.isMeasured = true;
    bullet.mouseEnabled = false;
    bullet.verticalCenter = "bottom";
    bullet.interactionsEnabled = false;
    
    var hoverState = bullet.states.create("hover");
    var outlineCircle = bullet.createChild(am4core.Circle);
    outlineCircle.adapter.add("radius", function (radius:any, target:any) {
        var circleBullet = target.parent;
        return circleBullet.circle.pixelRadius + 10;
    })
    
    var image = bullet.createChild(am4core.Image);
    image.width = 60;
    image.height = 60;
    image.horizontalCenter = "middle";
    image.verticalCenter = "middle";
    image.propertyFields.href = "href";
    
    image.adapter.add("mask", function (mask:any, target:any) {
        var circleBullet = target.parent;
        return circleBullet.circle;
    })
    
    var previousBullet:any
    chart.cursor.events.on("cursorpositionchanged", function (event:any) {
        var dataItem = series.tooltipDataItem;
    
        if (dataItem.column) {
            var bullet = dataItem.column.children.getIndex(1);
    
            if (previousBullet && previousBullet != bullet) {
                previousBullet.isHover = false;
            }
    
            if (previousBullet != bullet) {
    
                var hs = bullet.states.getKey("hover");
                hs.properties.dy = -bullet.parent.pixelHeight + 30;
                bullet.isHover = true;
    
                previousBullet = bullet;
            }
        }
    })
    chart.scrollbarX = new am4core.Scrollbar();

    
    }); // end am4core.ready() 


    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        var chart = am4core.create("chartdiv2", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        
        chart.paddingRight = 30;
        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
        
        var colorSet = new am4core.ColorSet();
        colorSet.saturation = 0.4;
        
        chart.data = [
          {
            name: "John",
            fromDate: "2018-01-01 08:00",
            toDate: "2018-01-01 10:00",
            color: colorSet.getIndex(0).brighten(0)
          },
          {
            name: "John",
            fromDate: "2018-01-01 12:00",
            toDate: "2018-01-01 15:00",
            color: colorSet.getIndex(0).brighten(0.4)
          },
          {
            name: "John",
            fromDate: "2018-01-01 15:30",
            toDate: "2018-01-01 21:30",
            color: colorSet.getIndex(0).brighten(0.8)
          },
        
          {
            name: "Jane",
            fromDate: "2018-01-01 09:00",
            toDate: "2018-01-01 12:00",
            color: colorSet.getIndex(2).brighten(0)
          },
          {
            name: "Jane",
            fromDate: "2018-01-01 13:00",
            toDate: "2018-01-01 17:00",
            color: colorSet.getIndex(2).brighten(0.4)
          },
        
          {
            name: "Peter",
            fromDate: "2018-01-01 11:00",
            toDate: "2018-01-01 16:00",
            color: colorSet.getIndex(4).brighten(0)
          },
          {
            name: "Peter",
            fromDate: "2018-01-01 16:00",
            toDate: "2018-01-01 19:00",
            color: colorSet.getIndex(4).brighten(0.4)
          },
        
          {
            name: "Melania",
            fromDate: "2018-01-01 16:00",
            toDate: "2018-01-01 20:00",
            color: colorSet.getIndex(6).brighten(0)
          },
          {
            name: "Melania",
            fromDate: "2018-01-01 20:30",
            toDate: "2018-01-01 24:00",
            color: colorSet.getIndex(6).brighten(0.4)
          },
        
          {
            name: "Donald",
            fromDate: "2018-01-01 13:00",
            toDate: "2018-01-01 24:00",
            color: colorSet.getIndex(8).brighten(0)
          }
        ];
        
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.inversed = true;
        
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
        dateAxis.renderer.minGridDistance = 70;
        dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
        dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
        dateAxis.strictMinMax = true;
        dateAxis.renderer.tooltipLocation = 0;
        
        var series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.columns.template.width = am4core.percent(80);
        series1.columns.template.tooltipText = "{name}: {openDateX} - {dateX}";
        
        series1.dataFields.openDateX = "fromDate";
        series1.dataFields.dateX = "toDate";
        series1.dataFields.categoryY = "name";
        series1.columns.template.propertyFields.fill = "color"; // get color from data
        series1.columns.template.propertyFields.stroke = "color";
        series1.columns.template.strokeOpacity = 1;
        
        chart.scrollbarX = new am4core.Scrollbar();
        
        }); // end am4core.ready()


}

  

}
