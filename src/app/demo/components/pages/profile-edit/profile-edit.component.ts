import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent {

    newName!: string;
    newEmail!: string;
    newPassword!: string;
    newLastName!: string;

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.newName = 'Leandro';
        this.newLastName = 'Lobo';
        this.newEmail = 'leandro@muni-lujan.org.ar';
        this.newPassword = '****';
    }

    backToDashboard(){
        this.router.navigateByUrl('');
    }

}
