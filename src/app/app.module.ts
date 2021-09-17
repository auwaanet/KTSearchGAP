import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {LeafletMarkerClusterModule} from'@asymmetrik/ngx-leaflet-markercluster'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapDashComponent } from './map-dash/map-dash.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MapPageComponent } from './map-page/map-page.component';
import { DashboarLayoutComponent } from './layouts/dashboar-layout/dashboar-layout.component';
import { MapComponent } from './layouts/map/map.component';
import { MapSearchComponent } from './map-search/map-search.component';
import { MapDirectionComponent } from './map-direction/map-direction.component';
import { MapWindyComponent } from './layouts/map-windy/map-windy.component';
import { WindyComponent } from './windy/windy.component';
import { AddPolyComponent } from './layouts/add-poly/add-poly.component';
import { EditPolyComponent } from './layouts/edit-poly/edit-poly.component';
import { MarkerClusterComponent } from './marker-cluster/marker-cluster.component';
import { TableDashComponent } from './table-dash/table-dash.component';
import { SortDirective } from './directives/sort.directive';
import { SearchTablePipe} from './pipes/search-table.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragInforComponent} from './drag-infor/drag-infor.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { DragInforRightComponent } from './drag-infor-right/drag-infor-right.component';
@NgModule({
  declarations: [
    AppComponent,
    MapDashComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    MapPageComponent,
    DashboarLayoutComponent,
    MapComponent,
    MapSearchComponent,
    MapDirectionComponent,
    MapWindyComponent,
    WindyComponent,
    AddPolyComponent,
    EditPolyComponent,
    MarkerClusterComponent,
    TableDashComponent,
    SortDirective,
    SearchTablePipe,
    DragInforComponent,
    RightSidebarComponent,
    DragInforRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    NgSelectModule,LeafletMarkerClusterModule,
     BrowserAnimationsModule,DragDropModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
