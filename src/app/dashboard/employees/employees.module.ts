import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { EmployeesCardModule } from '../../shared/components/cards/employees-card/employees-card.module';
import { EmployeersService } from 'src/app/shared/services/employeers.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    EmployeesCardModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    EmployeersService
  ],
})
export class EmployeesModule { }
