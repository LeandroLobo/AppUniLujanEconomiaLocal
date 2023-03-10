import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root',
})
export class LoginStorageService {
	constructor(private cookieService: CookieService) {}

	setLoggedUser(user: string) {
		localStorage.setItem('loggedUser', user);
	}

	setLoggedPass(pass: string) {
		localStorage.setItem('loggedPass', btoa(pass));
	}

	setRememberMe(element: boolean) {
		localStorage.setItem('rememberMe', element.toString());
	}

	setUrlBeforeLogin(url: string) {
		sessionStorage.setItem('urlBeforeLogin', url);
	}

	getUrlBeforeLogin(): string {
		const url = sessionStorage.getItem('urlBeforeLogin') || '';
		if (url !== '/login' && url !== '/404') {
			return url;
		} else {
			return '';
		}
	}

	getLoggedUser(): string {
		return localStorage.getItem('loggedUser') || '';
	}

	getLoggedUserID(): string {
		return localStorage.getItem('userID') || '';
	}

	getLoggedPass(): string {
		const result = localStorage.getItem('loggedPass');
		if (result) {
			return atob(result);
		} else {
			return '';
		}
	}

	getRememberMe(): boolean {
		const result = localStorage.getItem('rememberMe');
		if (result && result === 'true') {
			return true;
		} else {
			return false;
		}
	}

	setIsAuthenticated(value: boolean) {
		if (value) {
			localStorage.setItem('is-authenticated', value.toString());
			this.cookieService.set('is-authenticated', value.toString());
		} else {
			localStorage.setItem('is-authenticated', false.toString());
			this.cookieService.set('is-authenticated', false.toString());
		}
	}

	getIsAuthenticated(): boolean {
		if (localStorage.getItem('is-authenticated') && localStorage.getItem('is-authenticated') === 'true') {
			return true;
		}
		return false;
	}

	getSessionIsAuthenticated(): boolean {
		if (this.cookieService.get('is-authenticated') && this.cookieService.get('is-authenticated') === 'true') {
			return true;
		}
		return false;
	}
}
