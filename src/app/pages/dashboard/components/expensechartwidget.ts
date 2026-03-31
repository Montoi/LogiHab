import { afterNextRender, Component, effect, inject, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { LayoutService } from '@/app/layout/service/layout.service';

@Component({
    standalone: true,
    selector: 'app-expense-chart-widget',
    imports: [ChartModule],
    template: `
        <div class="card mb-8!">
            <div class="font-semibold text-xl mb-4">Composición del Gasto Operativo</div>
            <p-chart type="doughnut" [data]="chartData()" [options]="chartOptions()" class="h-100" />
        </div>
    `
})
export class ExpenseChartWidget {
    layoutService = inject(LayoutService);

    chartData = signal<any>(null);

    chartOptions = signal<any>(null);

    constructor() {
        afterNextRender(() => {
            setTimeout(() => {
                this.initChart();
            }, 150);
        });

        effect(() => {
            this.layoutService.layoutConfig().darkTheme;
            setTimeout(() => {
                this.initChart();
            }, 150);
        });
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.chartData.set({
            labels: ['Alquileres Netos', 'Servicios Básicos (Luz, Agua, Gas)', 'Mantenimiento y Reparaciones', 'Limpieza y Suministros'],
            datasets: [
                {
                    data: [520000, 187500, 95000, 45000],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--p-blue-500'),
                        documentStyle.getPropertyValue('--p-orange-500'),
                        documentStyle.getPropertyValue('--p-cyan-500'),
                        documentStyle.getPropertyValue('--p-purple-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--p-blue-400'),
                        documentStyle.getPropertyValue('--p-orange-400'),
                        documentStyle.getPropertyValue('--p-cyan-400'),
                        documentStyle.getPropertyValue('--p-purple-400')
                    ],
                    borderWidth: 0
                }
            ]
        });

        this.chartOptions.set({
            maintainAspectRatio: false,
            aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                        padding: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (context: any) => {
                            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                            const pct = ((context.raw / total) * 100).toFixed(1);
                            return context.label + ': $' + context.raw.toLocaleString('es-MX') + ' (' + pct + '%)';
                        }
                    }
                }
            },
            cutout: '60%'
        });
    }
}
