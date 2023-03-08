import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConvocatoriasCulturaComponent } from './convocatorias-cultura.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ConvocatoriasCulturaComponent }
    ])],
    exports: [RouterModule]
})
export class ConvocatoriasCulturaRoutingModule { }
