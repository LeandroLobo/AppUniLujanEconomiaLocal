import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment';

interface ApiData {
    d: string;
    v: number;
}
@Component({
    templateUrl: './emptydemo.component.html',
})
export class EmptyDemoComponent {
    constructor(private http: HttpClient, public layoutService: LayoutService) {
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

    convocatoriasApiUrl = 'https://www.cultura.gob.ar/api/v2.0/convocatorias/?format=json&limit=8&offset=';

    getValoresInflacion() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + this.bearerToken,
         });
        return this.http.get(this.inflacionApiUrl, {headers}).pipe(map((response: any) => {
            return response;
        }));
    }

    getConvocatorias() {
        let offset = 0;
        return this.http.get(this.convocatoriasApiUrl + offset).pipe(map((response: any) => {
            return response;
        }));
    }

    ngOnInit() {
        this.getValoresInflacion().subscribe(res => {
            this.apiData = res;
            this.initCharts()
        });
        this.getConvocatorias().subscribe(res => console.log(res));
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const data2022: number[] = this.apiData.filter(data => data.d.split('-').includes('2022')).map(d => d.v);
        const data2021: number[] = this.apiData.filter(data => data.d.split('-').includes('2021')).map(d => d.v);

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
