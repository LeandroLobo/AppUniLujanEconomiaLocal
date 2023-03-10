import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Convocatoria } from '../_core/models/convocatoria.model';

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
    loadingData = false;
    chartsData:any = {};
    actividadAnualOptions!: { plugins: { legend: { labels: { usePointStyle: boolean; color: string; }; }; }; };
    actividadAnualData!: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };
    actividadTrimestralOptions!: { plugins: { legend: { labels: { fontColor: string; }; }; }; scales: { x: { ticks: { color: string; font: { weight: number; }; }; grid: { display: boolean; drawBorder: boolean; }; }; y: { ticks: { color: string; }; grid: { color: string; drawBorder: boolean; }; }; }; };
    actividadTrimestralData!: { labels: string[]; datasets: { label: string; backgroundColor: string; borderColor: string; data: number[]; }[]; };

    constructor(private http: HttpClient, public layoutService: LayoutService, private messageService: MessageService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.initCharts();
        });
    }

    ngOnInit() {
        this.getConvocatorias();
    }

    getConvocatorias() {
        this.loadingData = true;
        try {
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
                this.initValues();
            })
        } catch (error) {
            this.loadingData = false;
            this.messageService.addAll([
                {severity:'error', summary: 'Error en la consulta a la API', detail: 'error', sticky: true},
            ]);
        }
    }

    initValues() {
        const seccion2018 = this.apiData.filter(x => x.fecha_inicio.includes('2018'));
        const seccion2019 = this.apiData.filter(x => x.fecha_inicio.includes('2019'));
        const seccion2020 = this.apiData.filter(x => x.fecha_inicio.includes('2020'));
        const seccion2021 = this.apiData.filter(x => x.fecha_inicio.includes('2021'));
        const seccion2022 = this.apiData.filter(x => x.fecha_inicio.includes('2022'));
        const seccion2023 = this.apiData.filter(x => x.fecha_inicio.includes('2023'));
        const total = seccion2018.length + seccion2019.length + seccion2020.length + seccion2021.length + seccion2022.length + seccion2023.length;
        this.chartsData.total2018 = seccion2018.length;
        this.chartsData.total2019 = seccion2019.length;
        this.chartsData.total2020 = seccion2020.length;
        this.chartsData.total2021 = seccion2021.length;
        this.chartsData.total2022 = seccion2022.length;
        this.chartsData.total = total;
        console.log(total);

        this.chartsData.a2018 = {};
        this.chartsData.a2018.t1 = seccion2018.filter(x => x.fecha_inicio.includes('2018-01') || x.fecha_inicio.includes('2018-02') || x.fecha_inicio.includes('2018-03')).length;
        this.chartsData.a2018.t2 = seccion2018.filter(x => x.fecha_inicio.includes('2018-04') || x.fecha_inicio.includes('2018-05') || x.fecha_inicio.includes('2018-06')).length;
        this.chartsData.a2018.t3 = seccion2018.filter(x => x.fecha_inicio.includes('2018-07') || x.fecha_inicio.includes('2018-08') || x.fecha_inicio.includes('2018-09')).length;
        this.chartsData.a2018.t4 = seccion2018.filter(x => x.fecha_inicio.includes('2018-10') || x.fecha_inicio.includes('2018-11') || x.fecha_inicio.includes('2018-12')).length;

        this.chartsData.a2019 = {};
        this.chartsData.a2019.t1 = seccion2019.filter(x => x.fecha_inicio.includes('2019-01') || x.fecha_inicio.includes('2019-02') || x.fecha_inicio.includes('2019-03')).length;
        this.chartsData.a2019.t2 = seccion2019.filter(x => x.fecha_inicio.includes('2019-04') || x.fecha_inicio.includes('2019-05') || x.fecha_inicio.includes('2019-06')).length;
        this.chartsData.a2019.t3 = seccion2019.filter(x => x.fecha_inicio.includes('2019-07') || x.fecha_inicio.includes('2019-08') || x.fecha_inicio.includes('2019-09')).length;
        this.chartsData.a2019.t4 = seccion2019.filter(x => x.fecha_inicio.includes('2019-10') || x.fecha_inicio.includes('2019-11') || x.fecha_inicio.includes('2019-12')).length;

        this.chartsData.a2020 = {};
        this.chartsData.a2020.t1 = seccion2020.filter(x => x.fecha_inicio.includes('2020-01') || x.fecha_inicio.includes('2020-02') || x.fecha_inicio.includes('2020-03')).length;
        this.chartsData.a2020.t2 = seccion2020.filter(x => x.fecha_inicio.includes('2020-04') || x.fecha_inicio.includes('2020-05') || x.fecha_inicio.includes('2020-06')).length;
        this.chartsData.a2020.t3 = seccion2020.filter(x => x.fecha_inicio.includes('2020-07') || x.fecha_inicio.includes('2020-08') || x.fecha_inicio.includes('2020-09')).length;
        this.chartsData.a2020.t4 = seccion2020.filter(x => x.fecha_inicio.includes('2020-10') || x.fecha_inicio.includes('2020-11') || x.fecha_inicio.includes('2020-12')).length;

        this.chartsData.a2021 = {};
        this.chartsData.a2021.t1 = seccion2021.filter(x => x.fecha_inicio.includes('2021-01') || x.fecha_inicio.includes('2021-02') || x.fecha_inicio.includes('2021-03')).length;
        this.chartsData.a2021.t2 = seccion2021.filter(x => x.fecha_inicio.includes('2021-04') || x.fecha_inicio.includes('2021-05') || x.fecha_inicio.includes('2021-06')).length;
        this.chartsData.a2021.t3 = seccion2021.filter(x => x.fecha_inicio.includes('2021-07') || x.fecha_inicio.includes('2021-08') || x.fecha_inicio.includes('2021-09')).length;
        this.chartsData.a2021.t4 = seccion2021.filter(x => x.fecha_inicio.includes('2021-10') || x.fecha_inicio.includes('2021-11') || x.fecha_inicio.includes('2021-12')).length;

        this.chartsData.a2022 = {};
        this.chartsData.a2022.t1 = seccion2022.filter(x => x.fecha_inicio.includes('2022-01') || x.fecha_inicio.includes('2022-02') || x.fecha_inicio.includes('2022-03')).length;
        this.chartsData.a2022.t2 = seccion2022.filter(x => x.fecha_inicio.includes('2022-04') || x.fecha_inicio.includes('2022-05') || x.fecha_inicio.includes('2022-06')).length;
        this.chartsData.a2022.t3 = seccion2022.filter(x => x.fecha_inicio.includes('2022-07') || x.fecha_inicio.includes('2022-08') || x.fecha_inicio.includes('2022-09')).length;
        this.chartsData.a2022.t4 = seccion2022.filter(x => x.fecha_inicio.includes('2022-10') || x.fecha_inicio.includes('2022-11') || x.fecha_inicio.includes('2022-12')).length;

        this.loadingData = false;
        this.initCharts();
    }

    initCharts() {
        if (!this.chartsData.total) return;
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.actividadTrimestralData = {
            labels: ['1er Trimestre', '2do Trimestre', '3er Trimestre', '4to Trimestre'],
            datasets: [
                {
                    label: '2018',
                    backgroundColor: documentStyle.getPropertyValue('--primary-900'),
                    borderColor: documentStyle.getPropertyValue('--primary-900'),
                    data: [this.chartsData.a2018.t1, this.chartsData.a2018.t2, this.chartsData.a2018.t3, this.chartsData.a2018.t4]
                },
                {
                    label: '2019',
                    backgroundColor: documentStyle.getPropertyValue('--primary-700'),
                    borderColor: documentStyle.getPropertyValue('--primary-700'),
                    data: [this.chartsData.a2019.t1, this.chartsData.a2019.t2, this.chartsData.a2019.t3, this.chartsData.a2019.t4]
                },
                {
                    label: '2020',
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    data: [this.chartsData.a2020.t1, this.chartsData.a2020.t2, this.chartsData.a2020.t3, this.chartsData.a2020.t4]
                },
                {
                    label: '2021',
                    backgroundColor: documentStyle.getPropertyValue('--primary-300'),
                    borderColor: documentStyle.getPropertyValue('--primary-300'),
                    data: [this.chartsData.a2021.t1, this.chartsData.a2021.t2, this.chartsData.a2021.t3, this.chartsData.a2021.t4]
                },
                {
                    label: '2022',
                    backgroundColor: documentStyle.getPropertyValue('--primary-100'),
                    borderColor: documentStyle.getPropertyValue('--primary-100'),
                    data: [this.chartsData.a2022.t1, this.chartsData.a2022.t2, this.chartsData.a2022.t3, this.chartsData.a2022.t4]
                },
            ]
        };

        this.actividadTrimestralOptions = {
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

        this.actividadAnualData = {
            labels: ['2018', '2019', '2020', '2021', '2022'],
            datasets: [
                {
                    data: [this.chartsData.total2018, this.chartsData.total2019, this.chartsData.total2020, this.chartsData.total2021, this.chartsData.total2022],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--teal-500'),
                        documentStyle.getPropertyValue('--orange-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--indigo-400'),
                        documentStyle.getPropertyValue('--purple-400'),
                        documentStyle.getPropertyValue('--teal-400'),
                        documentStyle.getPropertyValue('--orange-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                    ]
                }]
        };

        this.actividadAnualOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
