import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileEditComponent } from './profile-edit.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProfileEditComponent }
    ])],
    exports: [RouterModule]
})
export class ProfileEditRoutingModule { }
