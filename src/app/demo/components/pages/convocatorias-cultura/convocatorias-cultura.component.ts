import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { map } from 'rxjs';

interface Convocatoria {
    id:           number;
    url:          string;
    link:         string;
    imagen:       string;
    titulo:       string;
    bajada:       string;
    cuerpo:       string;
    estado:       string;
    fecha_inicio: Date;
    fecha_fin:    Date;
    documentos:   string[];
}

@Component({
  selector: 'app-convocatorias-cultura',
  templateUrl: './convocatorias-cultura.component.html',
  styleUrls: ['./convocatorias-cultura.component.scss']
})
export class ConvocatoriasCulturaComponent {

    sortOrder: number = 0;
    sortField: string = '';
    convocatoriasApiUrl = 'https://www.cultura.gob.ar/api/v2.0/convocatorias/?format=json&limit=50&offset=';
    convocatorias: Convocatoria[] = [];


    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getConvocatorias().subscribe((data: Convocatoria[]) => this.convocatorias = data)
    }

    getConvocatorias() {
        let offset = 0;
        return this.http.get(this.convocatoriasApiUrl + offset).pipe(map((response: any) => {
            return response.results;
        }));
    }

    getClass(e: string): string {
        return (e === 'abierta') ? 'status-instock' : 'status-outofstock'
    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }
}
