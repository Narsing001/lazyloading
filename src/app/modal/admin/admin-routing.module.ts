import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompadminComponent } from '../compadmin/compadmin.component';
import { FetureComponent } from '../feture/feture.component';
import { ProjectComponent } from '../project/project.component';
import { AdminModule } from './admin.module';

const routes: Routes = [
  {path:'',component:CompadminComponent,
children:[
  { path:'',redirectTo:'project',pathMatch:'full'},
  {path:'Project',component:ProjectComponent},
  {path:'Branch',component:FetureComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
