import { Component } from '@angular/core';
import { KpiCardsWidget } from './components/kpicardswidget';
import { StatsCardsWidget } from './components/statscardswidget';
import { PaymentsTableWidget } from './components/paymentstablewidget';
import { BudgetChartWidget } from './components/budgetchartwidget';
import { ExpenseChartWidget } from './components/expensechartwidget';
import { ActivityWidget } from './components/activitywidget';

@Component({
    selector: 'app-dashboard',
    imports: [KpiCardsWidget, StatsCardsWidget, PaymentsTableWidget, BudgetChartWidget, ExpenseChartWidget, ActivityWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <!-- KPI Cards originales -->
            <app-kpi-cards-widget class="contents" />

            <!-- Stats Cards nuevas -->
            <app-stats-cards-widget class="contents" />

            <!-- Tabla Cuentas por Pagar -->
            <div class="col-span-12">
                <app-payments-table-widget />
            </div>

            <!-- Gráficos -->
            <div class="col-span-12 xl:col-span-6">
                <app-budget-chart-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-expense-chart-widget />
            </div>

            <!-- Actividad Reciente -->
            <div class="col-span-12">
                <app-activity-widget />
            </div>
        </div>
    `
})
export class Dashboard {}
