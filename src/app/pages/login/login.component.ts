import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { IAuth } from 'src/app/shared/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  public message!: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * login
   */
  public login() {
    this.authService.singIn(this.form.value).subscribe((response: IAuth[]) => {
      console.log('login', response);
      const user: any = this.form.value;
      const login = response.find((item: IAuth) => item.email === user.email && item.password === user.password)
      if (login) {
        this.router.navigateByUrl('/dashboard/employeers');
        localStorage.setItem('user', JSON.stringify(login));
      } else {
        this.message = 'Correo y/o contraseña incorrectos';
      }
    })
  }

  /**
   * @description Funcion para creacion e inicializacion de formulario
   * 
   */
  private createForm() {
    this.form = this.fb.group({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/)
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }


  public get email(): FormControl {
    return this.form.get('email') as FormControl;
  }


  public get password(): FormControl {
    return this.form.get('password') as FormControl;
  }



}
