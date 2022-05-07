import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth } from './models/auth.model';
import { filter, find, first, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

  /**
   * singIn
   */
  public singIn(data: any) {
    console.log('ata', data);
    return this.http.get<IAuth[]>('./assets/mocks/authentication-data.json');
  }

  /**
   * logout
   */
  public logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
