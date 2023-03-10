import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstadisticasCulturaComponent } from './estadisticas-cultura.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EstadisticasCulturaComponent }
    ])],
    exports: [RouterModule]
})
export class EstadisticasCulturaRoutingModule { }
