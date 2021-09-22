import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapDashComponent } from './map-dash/map-dash.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MapPageComponent } from './map-page/map-page.component';
import { DashboarLayoutComponent } from './layouts/dashboar-layout/dashboar-layout.component';
import { MapComponent } from './layouts/map/map.component';
import { MapWindyComponent } from './layouts/map-windy/map-windy.component';
import { AddPolyComponent } from './layouts/add-poly/add-poly.component';

const routes: Routes = [
  {path:'',component:DashboarLayoutComponent},
  {path:'map',component:MapComponent},
  {path:'windy',component:MapWindyComponent},{path:'addpoly',component:AddPolyComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
