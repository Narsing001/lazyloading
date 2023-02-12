import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Componant/about/about.component';
import { DepartmentComponent } from './Componant/department/department.component';
import { EmployeComponent } from './Componant/employe/employe.component';
import { HomeComponent } from './Componant/home/home.component';
import { LoginComponent } from './Componant/login/login.component';

const routes: Routes = [
  {path:"",redirectTo:'Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent},
 {path:"Emp",component:EmployeComponent},
  {path:"Dept",component:DepartmentComponent},
  {path:"About",component:AboutComponent},
  {path:"login",component:LoginComponent},
   {path:'Admin',loadChildren:()=>import('./modal/admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
