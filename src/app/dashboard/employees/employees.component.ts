import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IEmployeer } from 'src/app/shared/models/employeer.model';
import { EmployeersService } from '../../shared/services/employeers.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  public allEmployeers = new MatTableDataSource<IEmployeer>();
  public sub!: Subscription;
  constructor(private readonly employeersService: EmployeersService) { }

  ngOnInit(): void {
    this.getEmployeers();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  private getEmployeers() {
    this.sub = this.employeersService.getEmployeers().subscribe((response: Array<IEmployeer>) => {
      this.allEmployeers.data = response.sort((a: IEmployeer, b: IEmployeer) => {
        if (a.last_name > b.last_name) {
          return 1;
        }
        if (a.last_name < b.last_name) {
          return -1;
        }
        return 0;
      });

    })
  }

  /**
   * filterEmployeers
   */
  public filterEmployeers(filter: any) {
    this.allEmployeers.filter = filter.target.value.trim().toLowerCase();
  }

}
