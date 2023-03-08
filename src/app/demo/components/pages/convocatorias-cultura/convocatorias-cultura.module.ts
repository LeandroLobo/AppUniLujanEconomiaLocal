import { ChartModule } from 'primeng/chart';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvocatoriasCulturaRoutingModule } from './convocatorias-cultura-routing.module';
import { ConvocatoriasCulturaComponent } from './convocatorias-cultura.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
    imports: [
        CommonModule,
        ConvocatoriasCulturaRoutingModule,
        ChartModule,
        CardModule,
        ButtonModule,
        DataViewModule
    ],
    declarations: [ConvocatoriasCulturaComponent]
})
export class ConvocatoriasCulturaModule { }
