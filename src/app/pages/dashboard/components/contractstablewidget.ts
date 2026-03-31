import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

interface ContractRow {
    propiedad: string;
    fechaVencimiento: string;
    monto: number;
    estatus: string;
    severity: 'danger' | 'warn' | 'info';
}

@Component({
    standalone: true,
    selector: 'app-contracts-table-widget',
    imports: [CommonModule, TableModule, TagModule],
    template: `
        <div class="card mb-8!">
            <div class="font-semibold text-xl mb-4">Contratos por Vencer — Próximos 30 Días</div>
            <p-table [value]="contracts" [paginator]="true" [rows]="5" responsiveLayout="scroll">
                <ng-template #header>
                    <tr>
                        <th pSortableColumn="propiedad">Propiedad <p-sortIcon field="propiedad" /></th>
                        <th pSortableColumn="fechaVencimiento">Fecha Vencimiento <p-sortIcon field="fechaVencimiento" /></th>
                        <th pSortableColumn="monto">Monto <p-sortIcon field="monto" /></th>
                        <th>Estatus</th>
                    </tr>
                </ng-template>
                <ng-template #body let-row>
                    <tr>
                        <td>{{ row.propiedad }}</td>
                        <td>{{ row.fechaVencimiento }}</td>
                        <td>{{ row.monto | currency: 'MXN':'symbol-narrow':'1.0-0' }}</td>
                        <td>
                            <p-tag [value]="row.estatus" [severity]="row.severity" />
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
})
export class ContractsTableWidget {
    contracts: ContractRow[] = [
        { propiedad: 'Casa Roble #12, Querétaro', fechaVencimiento: '05/04/2026', monto: 28500, estatus: 'Urgente', severity: 'danger' },
        { propiedad: 'Depto. Vista Hermosa 4B, León', fechaVencimiento: '10/04/2026', monto: 18200, estatus: 'Urgente', severity: 'danger' },
        { propiedad: 'Casa Encinos #7, San Luis Potosí', fechaVencimiento: '15/04/2026', monto: 22000, estatus: 'Próximo', severity: 'warn' },
        { propiedad: 'Residencial Álamos 201, Aguascalientes', fechaVencimiento: '20/04/2026', monto: 31000, estatus: 'Próximo', severity: 'warn' },
        { propiedad: 'Casa Cedros #3, Celaya', fechaVencimiento: '28/04/2026', monto: 19800, estatus: 'En revisión', severity: 'info' },
        { propiedad: 'Casa Pinos #5, Irapuato', fechaVencimiento: '25/04/2026', monto: 16500, estatus: 'En revisión', severity: 'info' },
        { propiedad: 'Depto. San Miguel 3A, Querétaro', fechaVencimiento: '08/04/2026', monto: 24300, estatus: 'Urgente', severity: 'danger' },
        { propiedad: 'Casa Laureles #9, Salamanca', fechaVencimiento: '18/04/2026', monto: 15800, estatus: 'Próximo', severity: 'warn' }
    ];
}
