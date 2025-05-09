import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

/** Import any ng-zorro components as the module required except icon module */
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDividerComponent} from 'ng-zorro-antd/divider';

// Assign all ng-zorro modules to this array
const antdModule = [
    NzButtonModule,
    NzDividerComponent
];

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        ...antdModule,
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
