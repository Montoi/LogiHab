import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-activity-widget',
    imports: [CommonModule],
    template: `
        <div class="card">
            <div class="font-semibold text-xl mb-6">Actividad Reciente — Últimas 24h</div>

            <span class="block text-muted-color font-medium mb-4">HOY</span>
            <ul class="p-0 mx-0 mt-0 mb-6 list-none">
                <li class="flex items-center py-2 border-b border-surface">
                    <div class="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0">
                        <i class="pi pi-sign-in text-xl! text-green-500"></i>
                    </div>
                    <span class="text-surface-900 dark:text-surface-0 leading-normal">
                        Ing. Carlos Mendoza
                        <span class="text-surface-700 dark:text-surface-100"> ingresó a <span class="text-primary font-bold">Casa Roble #12, Querétaro</span></span>
                    </span>
                    <span class="text-muted-color ml-auto shrink-0">08:30</span>
                </li>
                <li class="flex items-center py-2 border-b border-surface">
                    <div class="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-full mr-4 shrink-0">
                        <i class="pi pi-sign-out text-xl! text-orange-500"></i>
                    </div>
                    <span class="text-surface-900 dark:text-surface-0 leading-normal">
                        Ing. Ana Patricia Ríos
                        <span class="text-surface-700 dark:text-surface-100"> salió de <span class="text-primary font-bold">Depto. Vista Hermosa 4B, León</span></span>
                    </span>
                    <span class="text-muted-color ml-auto shrink-0">07:15</span>
                </li>
                <li class="flex items-center py-2">
                    <div class="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0">
                        <i class="pi pi-sign-in text-xl! text-green-500"></i>
                    </div>
                    <span class="text-surface-900 dark:text-surface-0 leading-normal">
                        Ing. Miguel Sánchez
                        <span class="text-surface-700 dark:text-surface-100"> ingresó a <span class="text-primary font-bold">Casa Pinos #5, Irapuato</span></span>
                    </span>
                    <span class="text-muted-color ml-auto shrink-0">06:45</span>
                </li>
            </ul>

            <span class="block text-muted-color font-medium mb-4">AYER</span>
            <ul class="p-0 m-0 list-none">
                <li class="flex items-center py-2 border-b border-surface">
                    <div class="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0">
                        <i class="pi pi-sign-in text-xl! text-green-500"></i>
                    </div>
                    <span class="text-surface-900 dark:text-surface-0 leading-normal">
                        Ing. Roberto Guzmán
                        <span class="text-surface-700 dark:text-surface-100"> ingresó a <span class="text-primary font-bold">Residencial Álamos 201, Aguascalientes</span></span>
                    </span>
                    <span class="text-muted-color ml-auto shrink-0">22:00</span>
                </li>
                <li class="flex items-center py-2 border-b border-surface">
                    <div class="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-full mr-4 shrink-0">
                        <i class="pi pi-sign-out text-xl! text-orange-500"></i>
                    </div>
                    <span class="text-surface-900 dark:text-surface-0 leading-normal">
                        Ing. Laura Vega
                        <span class="text-surface-700 dark:text-surface-100"> salió de <span class="text-primary font-bold">Casa Encinos #7, San Luis Potosí</span></span>
                    </span>
                    <span class="text-muted-color ml-auto shrink-0">18:45</span>
                </li>
                <li class="flex items-center py-2 border-b border-surface">
                    <div class="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0">
                        <i class="pi pi-sign-in text-xl! text-green-500"></i>
                    </div>
                    <span class="text-surface-900 dark:text-surface-0 leading-normal">
                        Ing. Fernando Torres
                        <span class="text-surface-700 dark:text-surface-100"> ingresó a <span class="text-primary font-bold">Casa Cedros #3, Celaya</span></span>
                    </span>
                    <span class="text-muted-color ml-auto shrink-0">16:30</span>
                </li>
                <li class="flex items-center py-2">
                    <div class="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0">
                        <i class="pi pi-sign-in text-xl! text-green-500"></i>
                    </div>
                    <span class="text-surface-900 dark:text-surface-0 leading-normal">
                        Ing. Diana Morales
                        <span class="text-surface-700 dark:text-surface-100"> ingresó a <span class="text-primary font-bold">Casa Roble #8, Querétaro</span></span>
                    </span>
                    <span class="text-muted-color ml-auto shrink-0">15:00</span>
                </li>
            </ul>
        </div>
    `
})
export class ActivityWidget {}
