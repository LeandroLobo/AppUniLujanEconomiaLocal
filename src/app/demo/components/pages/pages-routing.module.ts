import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'profile-edit', loadChildren: () => import('./profile-edit/profile-edit.module').then(m => m.ProfileEditModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: 'convocatorias-cultura', loadChildren: () => import('./convocatorias-cultura/convocatorias-cultura.module').then(m => m.ConvocatoriasCulturaModule) },
        { path: 'estadisticas-cultura', loadChildren: () => import('./estadisticas-cultura/estadisticas-cultura.module').then(m => m.EstadisticasCulturaModule) },
        { path: '**', redirectTo: '/notfound' },

    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
