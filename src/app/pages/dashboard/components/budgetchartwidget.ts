import { afterNextRender, Component, effect, inject, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { LayoutService } from '@/app/layout/service/layout.service';

@Component({
    standalone: true,
    selector: 'app-budget-chart-widget',
    imports: [ChartModule],
    template: `
        <div class="card mb-8!">
            <div class="font-semibold text-xl mb-4">Presupuesto vs Gasto Real — Servicios Básicos</div>
            <p-chart type="bar" [data]="chartData()" [options]="chartOptions()" class="h-80" />
        </div>
    `
})
export class BudgetChartWidget {
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
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData.set({
            labels: ['Oct 2025', 'Nov 2025', 'Dic 2025', 'Ene 2026', 'Feb 2026', 'Mar 2026'],
            datasets: [
                {
                    label: 'Presupuesto',
                    backgroundColor: documentStyle.getPropertyValue('--p-green-500'),
                    borderColor: documentStyle.getPropertyValue('--p-green-500'),
                    data: [150000, 155000, 160000, 158000, 162000, 165000]
                },
                {
                    label: 'Gasto Real',
                    backgroundColor: documentStyle.getPropertyValue('--p-teal-500'),
                    borderColor: documentStyle.getPropertyValue('--p-teal-500'),
                    data: [142000, 158000, 172000, 149000, 175000, 195000]
                }
            ]
        });

        this.chartOptions.set({
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (context: any) => {
                            return context.dataset.label + ': $' + context.raw.toLocaleString('es-MX');
                        }
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
                        display: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        callback: (value: number) => '$' + value.toLocaleString('es-MX')
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        });
    }
}
