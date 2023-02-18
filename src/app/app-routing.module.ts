import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { ApplicationComponent } from './Component/application/application.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HelpComponent } from './Component/help/help.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './Component/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"about",
    component:AboutComponent,
 
  },
  {
    path:"help",
    component:HelpComponent
  },
  {
    path:"application",
    component:ApplicationComponent
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"dashboard",
    canActivate:[AuthGuard],
    component:DashboardComponent,
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
