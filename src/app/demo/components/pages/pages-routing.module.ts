import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConvocatoriasCulturaComponent } from './convocatorias-cultura/convocatorias-cultura.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: 'convocatorias-cultura', loadChildren: () => import('./convocatorias-cultura/convocatorias-cultura.module').then(m => m.ConvocatoriasCulturaModule) },
        { path: '**', redirectTo: '/notfound' },

    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
