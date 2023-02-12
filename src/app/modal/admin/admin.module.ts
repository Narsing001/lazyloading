import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CompadminComponent } from '../compadmin/compadmin.component';
import { FetureComponent } from '../feture/feture.component';


@NgModule({
  declarations: [
    CompadminComponent,
    FetureComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
