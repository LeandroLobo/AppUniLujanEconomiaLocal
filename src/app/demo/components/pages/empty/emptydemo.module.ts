import { ChartModule } from 'primeng/chart';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        EmptyDemoRoutingModule,
        ChartModule,
        ToastModule
    ],
    declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
