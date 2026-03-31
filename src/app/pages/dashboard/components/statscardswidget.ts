import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-cards-widget',
    imports: [CommonModule],
    template: `
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Población Total</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">68 Ingenieros</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-blue-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">+4 </span>
                <span class="text-muted-color">esta semana</span>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Inventario de Viviendas</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">24 Propiedades</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-building text-orange-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">18 casas </span>
                <span class="text-muted-color">y 6 departamentos</span>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Próximo Desembolso (7 días)</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$215,800</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-wallet text-purple-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">6 pagos </span>
                <span class="text-muted-color">programados</span>
            </div>
        </div>
    `
})
export class StatsCardsWidget {}
