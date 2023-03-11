import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConvocatoriasCulturaComponent } from './convocatorias-cultura/convocatorias-cultura.component';
import { EstadisticasCulturaComponent } from './estadisticas-cultura/estadisticas-cultura.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'convocatorias', component: ConvocatoriasCulturaComponent },
        { path: 'estadisticas', component: EstadisticasCulturaComponent },
        { path: '**', redirectTo: '/notfound' },

    ])],
    exports: [RouterModule]
})
export class CulturaRoutingModule { }
