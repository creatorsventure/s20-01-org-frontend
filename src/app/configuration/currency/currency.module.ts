import {NgModule} from '@angular/core';
import {CurrencyIndexComponent} from './index/currency.index.component';
import {CurrencyListComponent} from './list/currency.list.component';
import {CurrencyOpsComponent} from './ops/currency.ops.component';
import {CurrencyRouteModule} from './route/currency.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [CurrencyIndexComponent, CurrencyListComponent, CurrencyOpsComponent],
    imports: [SharedModule, CurrencyRouteModule]
})
export class CurrencyModule {
}
