import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployeer } from '../models/employeer.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeersService {

  constructor(private readonly http: HttpClient) { }

  /**
   * getEmployeers
   */
  public getEmployeers() {
    return this.http.get<Array<IEmployeer>>('./assets/mocks/data-employeers.json');
  }
}
