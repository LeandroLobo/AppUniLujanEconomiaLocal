import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InflacionBcraComponent } from './inflacion-bcra.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: InflacionBcraComponent }
    ])],
    exports: [RouterModule]
})
export class InflacionBcraRoutingModule { }
