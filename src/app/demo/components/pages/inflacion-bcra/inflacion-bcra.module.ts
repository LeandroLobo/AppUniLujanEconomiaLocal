import { ChartModule } from 'primeng/chart';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InflacionBcraRoutingModule } from './inflacion-bcra-routing.module';
import { InflacionBcraComponent } from './inflacion-bcra.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        InflacionBcraRoutingModule,
        ChartModule,
        ToastModule
    ],
    declarations: [InflacionBcraComponent]
})
export class InflacionBcraModule { }
