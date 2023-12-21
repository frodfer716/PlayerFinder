import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = '';
  formName = '';
  formType!:string

  constructor( private route:ActivatedRoute, private loginService:LoginService, private router: Router ) { }

  ngOnInit(): void {
    this.formType = this.route.snapshot.params['formType'];
    this.changeType(this.formType);
  }

  changeType(formRes: string) {
    if (formRes == "login") {
      this.title = 'Inicio de sesion';
      this.formName = 'login';
    } else if (formRes == "register") {
      this.title = "Registrar usuario";
      this.formName = "register";
    } else {
      this.router.navigate(["**"]);
    }
  }

  login(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password);
  }

  register(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.register({email, password});
  }

}
