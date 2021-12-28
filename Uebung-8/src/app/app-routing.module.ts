
import { AuthguardGuard } from './authguard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './cities/city/city.component'

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "cities",
    component: CitiesComponent
  },
  {
    path: "cities/:id",
    component: CityComponent

  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
