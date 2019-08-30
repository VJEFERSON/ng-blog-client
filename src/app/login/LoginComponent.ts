import {Component } from '@angular/core';
import { UserLogin } from '../common/user/dataModel/UserLogin';
import { NgForm } from '@angular/forms';
import { AuthService } from '../common/auth/services/AuthService';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.html'
})

export class LoginComponent {
    public user: UserLogin = {} as UserLogin;
    public isLoading = false;

    constructor(private readonly authService: AuthService, private readonly router: Router) {
    }

    public onSubmit(form: NgForm) {
        if (form.valid) {
            this.authService.sigIn(this.user)
                .pipe(finalize(() => this.isLoading = false))
                .subscribe (() => this.router.navigate(['blog', 'list']));
        }
    }
}

