import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Componant/navigation/navigation.component';
import { HomeComponent } from './Componant/home/home.component';
import { EmployeComponent } from './Componant/employe/employe.component';
import { DepartmentComponent } from './Componant/department/department.component';
import { AboutComponent } from './Componant/about/about.component';
import { LoginComponent } from './Componant/login/login.component';
import { ProjectComponent } from './modal/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    EmployeComponent,
    DepartmentComponent,
    AboutComponent,
    LoginComponent,
    ProjectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

   
}
