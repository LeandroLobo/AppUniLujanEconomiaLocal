import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages-routing.module';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DataViewModule } from 'primeng/dataview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import {CardModule} from 'primeng/card';
import { CulturaRoutingModule } from './cultura-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ChartModule,
    CardModule,
    ButtonModule,
    DataViewModule,
    ToastModule,
    ProgressSpinnerModule,
    CulturaRoutingModule
  ]
})
export class CulturaModule { }
