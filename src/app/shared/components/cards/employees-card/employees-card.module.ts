import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesCardComponent } from './employees-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { EmployeersService } from '../../../../shared/services/employeers.service';



@NgModule({
  declarations: [EmployeesCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [EmployeesCardComponent]
})
export class EmployeesCardModule { }
