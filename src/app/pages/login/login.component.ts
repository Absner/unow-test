import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * @description Funcion para creacion e inicializacion de formulario
   * 
   */
  private createForm() {
    this.form = this.fb.group({
      email: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  
  public get email() : FormControl {
    return this.form.get('email') as FormControl;
  }

  
  public get password() : FormControl {
    return this.form.get('password') as FormControl;
  }
  
  

}
