import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map, Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment';

interface ApiData {
    d: string;
    v: number;
}
@Component({
    templateUrl: './inflacion-bcra.component.html',
    providers: [MessageService]
})
export class InflacionBcraComponent {
    constructor(private http: HttpClient, public layoutService: LayoutService, private messageService: MessageService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.initCharts();
        });

    }

    inflacionApiUrl = 'https://api.estadisticasbcra.com/inflacion_interanual_oficial';
    bearerToken = environment.BEARER_TOKEN_BCRA;

    apiData: ApiData[] = [];
    lineData: any;
    barData: any;
    lineOptions: any;
    barOptions: any;
    subscription: Subscription;


    getValoresInflacion() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + this.bearerToken,
         });
        return this.http.get(this.inflacionApiUrl, {headers}).pipe(map((response: any) => {
            return response;
        }));
    }



    ngOnInit() {
        this.getValoresInflacion().subscribe(
            res => {
                this.apiData = res;
                this.initCharts();
            },
            (err) => {
                this.messageService.addAll([
                    {severity:'error', summary: 'Error en la consulta a la API', detail: err.error, sticky: true},
                    {severity:'warn', summary: 'Los valores en las tablas no son reales', detail: 'Se muestran datos de testing, para no perder la vista de la gráfica, ', sticky: true}
                ]);
                this.initCharts();
            },
        );
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        let data2022: number[] = this.apiData.filter(data => data.d.split('-').includes('2022')).map(d => d.v);
        if (data2022.length === 0) data2022 = [75,67,67,70,78,90,70,60,50,40,30,20];
        let data2021: number[] = this.apiData.filter(data => data.d.split('-').includes('2021')).map(d => d.v);
        if (data2021.length === 0) data2021 = [46,46,38,98,9,45,36,57,27,31,84,46];

        this.barData = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
                {
                    label: '2022',
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    data: data2022
                },
                {
                    label: '2021',
                    backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                    borderColor: documentStyle.getPropertyValue('--primary-200'),
                    data: data2021
                }
            ]
        };

        this.barOptions = {
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

        this.lineData = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
                {
                    label: '2022',
                    data: data2022,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    tension: .4
                },
                {
                    label: '2021',
                    data: data2021,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                    borderColor: documentStyle.getPropertyValue('--primary-200'),
                    tension: .4
                }
            ]
        };

        this.lineOptions = {
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
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
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

    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
 }
