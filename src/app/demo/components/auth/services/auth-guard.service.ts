import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginStorageService } from './login-storage.service';
@Injectable({
	providedIn: 'root',
})
export class AuthGuardService {
	constructor(private router: Router, private loginStorage: LoginStorageService) {}

	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		if (!environment.authEnable) {
			return true;
		// }
		// if (this.authService.isResetPasswordRequired()) {
		// 	this.router.navigateByUrl('/renew-password');
		// 	return false;
		} else {
			const isAuth: boolean = this.loginStorage.getIsAuthenticated();
			const isSessionAuth: boolean = this.loginStorage.getSessionIsAuthenticated();
			if (isAuth && isSessionAuth) {
				if (this.checkAvailable()) {
					return true;
				} else {
					this.router.navigateByUrl('/notFound');
					return false;
				}
			} else {
				this.router.navigateByUrl('/auth/login');
				return false;
			}
		}
	}

	private checkAvailable(): boolean {
		// https://stackoverflow.com/questions/39747246/angular-2-get-current-route-in-guard/39747451
		// const routes = this.menuCustomService.getAvailableRoutes();
		// if ((routes && routes.indexOf(state['_routerState'].url) > -1) || state['_routerState'].url === '/') {
		// 	return true;
		// } else {
		// 	return false;
		// }
		return true;
	}
}
