import { LoginStorageService } from './../demo/components/auth/services/login-storage.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    profileMenuItems!: any[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private loginStorage: LoginStorageService, private router: Router) {}

    ngOnInit(): void {
        this.profileMenuItems = [
            {
                label: 'Editar Perfil', icon: 'pi pi-fw pi-user-edit',
                command: () => {
                    this.openProfileEdit();
                }
            },
            {
                separator: true
            },
            {
                label: 'Cerrar Session', icon: 'pi pi-fw pi-power-off',
                command: () => {
                    this.logOut();
                }
            },
        ];
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }
    logOut() {
        this.loginStorage.setIsAuthenticated(false);
        this.router.navigateByUrl('/auth/login');
    }
    openProfileEdit(){
        this.router.navigateByUrl('/pages/profile-edit');
    }
}
