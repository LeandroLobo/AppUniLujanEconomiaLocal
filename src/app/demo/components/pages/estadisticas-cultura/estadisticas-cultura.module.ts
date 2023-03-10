import { ChartModule } from 'primeng/chart';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasCulturaRoutingModule } from './estadisticas-cultura-routing.module';
import { EstadisticasCulturaComponent } from './estadisticas-cultura.component';
import { ToastModule } from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
    imports: [
        CommonModule,
        EstadisticasCulturaRoutingModule,
        ChartModule,
        ToastModule,ProgressSpinnerModule
    ],
    declarations: [EstadisticasCulturaComponent]
})
export class EstadisticasCulturaModule { }
