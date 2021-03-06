import { Injectable } from '@angular/core';
import { UserLogin } from '../../user/dataModel/UserLogin';
import { Observable, of } from 'rxjs';
import { AuthToken } from '../dataModel/AuthToken';
import { AuthResource } from './AuthResource';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class AuthService {
    private readonly AUTH_STORAGE_KEY = 'auth_token';

    constructor(private readonly resource: AuthResource, private readonly router: Router) { }

    public sigIn(user: UserLogin): Observable<void> {
        return this.resource.sigInUser(user)
            .pipe(
                map((authToken) => {
                    this.storeToken(authToken);
                    return;
                })
            );
    }

    public logout() {
        this.cleanToken();
        this.router.navigate(['login']);
    }

    private cleanToken() {
        localStorage.removeItem(this.AUTH_STORAGE_KEY);
    }

    private storeToken(authToken: AuthToken) {
        console.log(authToken);
        localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(authToken));
    }

    private loadToken(): AuthToken {
        try {
            return JSON.parse(localStorage.getItem(this.AUTH_STORAGE_KEY));
        } catch {
            console.error('Bad Json Format for token item');
        }
    }

    public isAuthorized(): boolean {
        return !_.isEmpty(this.loadToken());
    }

}
