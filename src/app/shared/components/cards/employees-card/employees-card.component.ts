import { Component, Input, OnInit } from '@angular/core';
import { IEmployeer } from 'src/app/shared/models/employeer.model';
import { EmployeersService } from '../../../../shared/services/employeers.service';

@Component({
  selector: 'app-employees-card',
  host: { class: 'app-employees-card' },
  templateUrl: './employees-card.component.html',
  styleUrls: ['./employees-card.component.scss']
})
export class EmployeesCardComponent implements OnInit {

  @Input() employeer!: IEmployeer;

  constructor() { }

  ngOnInit(): void { }

}
