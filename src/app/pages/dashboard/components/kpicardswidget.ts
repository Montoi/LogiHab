import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-kpi-cards-widget',
    imports: [CommonModule],
    template: `
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Capacidad Disponible</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">44 Camas Libres</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-table text-blue-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">78% de ocupaci&oacute;n </span>
                <span class="text-muted-color">sobre 200 camas totales</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Gasto Corriente Mensual</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$847,500</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-inbox text-orange-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">+3.2% </span>
                <span class="text-muted-color">vs. mes anterior</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Costo Prom. por Ingeniero</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$12,350</div>
                    </div>
                    <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-cyan-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">68 ingenieros </span>
                <span class="text-muted-color">activos</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Alertas de Mantenimiento</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">7 Activas</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-exclamation-triangle text-purple-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">3 urgentes </span>
                <span class="text-muted-color">requieren atención</span>
            </div>
        </div>
    `
})
export class KpiCardsWidget {}
