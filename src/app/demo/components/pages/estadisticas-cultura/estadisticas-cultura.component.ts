import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map, Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

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
  selector: 'app-estadisticas-cultura',
  templateUrl: './estadisticas-cultura.component.html',
  styleUrls: ['./estadisticas-cultura.component.scss'],
  providers: [MessageService]
})
export class EstadisticasCulturaComponent {
    data2022: any;
    dataTotal: any;
    options2022: any
    optionsTotal: any
    apiData: Convocatoria[] = [];
    subscription: Subscription;
    apiBaseUrl = 'https://www.cultura.gob.ar/api/v2.0/convocatorias/?format=json&';
    loadingData!: boolean;

    constructor(private http: HttpClient, public layoutService: LayoutService, private messageService: MessageService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.initCharts();
        });
    }

    ngOnInit() {
        this.loadingData = true;
        this.getConvocatorias();
        // this.messageService.addAll([
        //     {severity:'error', summary: 'Error en la consulta a la API', detail: err.error, sticky: true},
        // ]);
    }

    getConvocatorias() {
        fetch(this.apiBaseUrl + 'limit=100&offset=0').then(data => data.json()).then(res => {
            this.apiData = [...this.apiData, ...res.results];
            return fetch(this.apiBaseUrl + 'limit=200&offset=100');
        }).then(data => data.json()).then(res => {
            this.apiData = [...this.apiData, ...res.results];
            return fetch(this.apiBaseUrl + 'limit=300&offset=200');
        }).then(data => data.json()).then(res => {
            this.apiData = [...this.apiData, ...res.results];
            return fetch(this.apiBaseUrl + 'limit=400&offset=300');
        }).then(data => data.json()).then(res => {
            this.apiData = [...this.apiData, ...res.results];
            return fetch(this.apiBaseUrl + 'limit=500&offset=400');
        }).then(data => data.json()).then(res => {
            this.apiData = [...this.apiData, ...res.results];
            return fetch(this.apiBaseUrl + 'limit=600&offset=500');
        }).then(data => data.json()).then(res => {
            this.apiData = [...this.apiData, ...res.results];
            return fetch(this.apiBaseUrl + 'limit=700&offset=600');
        }).then(data => data.json()).then(res => {
            this.apiData = [...this.apiData, ...res.results];
            this.loadingData = false;
            this.initCharts();
        })
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data2022 = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
                {
                    label: '2021',
                    backgroundColor: documentStyle.getPropertyValue('--primary-400'),
                    borderColor: documentStyle.getPropertyValue('--primary-400'),
                    data: [9,8,7,6,5,4,3,2,1,0,8,6]
                },
            ]
        };

        this.options2022 = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
            }
        };

        // this.lineData = {
        //     labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        //     datasets: [
        //         {
        //             label: '2022',
        //             data: data2022,
        //             fill: false,
        //             backgroundColor: documentStyle.getPropertyValue('--primary-500'),
        //             borderColor: documentStyle.getPropertyValue('--primary-500'),
        //             tension: .4
        //         },
        //         {
        //             label: '2021',
        //             data: data2021,
        //             fill: false,
        //             backgroundColor: documentStyle.getPropertyValue('--primary-200'),
        //             borderColor: documentStyle.getPropertyValue('--primary-200'),
        //             tension: .4
        //         }
        //     ]
        // };

        // this.lineOptions = {
        //     plugins: {
        //         legend: {
        //             labels: {
        //                 fontColor: textColor
        //             }
        //         }
        //     },
        //     scales: {
        //         x: {
        //             ticks: {
        //                 color: textColorSecondary
        //             },
        //             grid: {
        //                 color: surfaceBorder,
        //                 drawBorder: false
        //             }
        //         },
        //         y: {
        //             ticks: {
        //                 color: textColorSecondary
        //             },
        //             grid: {
        //                 color: surfaceBorder,
        //                 drawBorder: false
        //             }
        //         },
        //     }
        // };

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
