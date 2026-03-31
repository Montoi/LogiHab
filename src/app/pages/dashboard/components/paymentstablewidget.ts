import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

interface PaymentRow {
    propiedad: string;
    fechaLimite: string;
    diasRestantes: number;
    monto: number;
    metodoPago: string;
}

@Component({
    standalone: true,
    selector: 'app-payments-table-widget',
    imports: [CommonModule, TableModule, TagModule],
    template: `
        <div class="card mb-8!">
            <div class="font-semibold text-xl mb-4">Cuentas por Pagar — Alquileres</div>
            <p-table [value]="payments" [paginator]="true" [rows]="5" responsiveLayout="scroll">
                <ng-template #header>
                    <tr>
                        <th pSortableColumn="propiedad">Propiedad <p-sortIcon field="propiedad" /></th>
                        <th pSortableColumn="diasRestantes">Fecha Límite de Pago <p-sortIcon field="diasRestantes" /></th>
                        <th pSortableColumn="monto">Monto <p-sortIcon field="monto" /></th>
                        <th>Método de Pago</th>
                    </tr>
                </ng-template>
                <ng-template #body let-row>
                    <tr>
                        <td>{{ row.propiedad }}</td>
                        <td>
                            <p-tag [value]="row.diasRestantes < 3 ? 'En ' + row.diasRestantes + ' día(s) — ' + row.fechaLimite : row.diasRestantes + ' días — ' + row.fechaLimite" [severity]="row.diasRestantes < 3 ? 'danger' : row.diasRestantes < 5 ? 'warn' : 'info'" />
                        </td>
                        <td>{{ row.monto | currency: 'MXN':'symbol-narrow':'1.0-0' }}</td>
                        <td>{{ row.metodoPago }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
})
export class PaymentsTableWidget {
    payments: PaymentRow[] = [
        { propiedad: 'Casa Roble #12, Querétaro', fechaLimite: '01/04/2026', diasRestantes: 1, monto: 28500, metodoPago: 'Transferencia' },
        { propiedad: 'Depto. Vista Hermosa 4B, León', fechaLimite: '02/04/2026', diasRestantes: 2, monto: 18200, metodoPago: 'Cheque' },
        { propiedad: 'Casa Encinos #7, San Luis Potosí', fechaLimite: '04/04/2026', diasRestantes: 4, monto: 22000, metodoPago: 'Transferencia' },
        { propiedad: 'Residencial Álamos 201, Aguascalientes', fechaLimite: '05/04/2026', diasRestantes: 5, monto: 31000, metodoPago: 'Efectivo' },
        { propiedad: 'Casa Cedros #3, Celaya', fechaLimite: '06/04/2026', diasRestantes: 6, monto: 19800, metodoPago: 'Transferencia' },
        { propiedad: 'Casa Pinos #5, Irapuato', fechaLimite: '07/04/2026', diasRestantes: 7, monto: 16500, metodoPago: 'Cheque' },
        { propiedad: 'Depto. San Miguel 3A, Querétaro', fechaLimite: '01/04/2026', diasRestantes: 1, monto: 24300, metodoPago: 'Transferencia' },
        { propiedad: 'Casa Laureles #9, Salamanca', fechaLimite: '03/04/2026', diasRestantes: 3, monto: 15800, metodoPago: 'Efectivo' }
    ];
}
