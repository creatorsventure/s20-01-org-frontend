import {NgModule} from '@angular/core';
import {MerchantCategoryIndexComponent} from './index/merchant-category.index.component';
import {MerchantCategoryListComponent} from './list/merchant-category.list.component';
import {MerchantCategoryOpsComponent} from './ops/merchant-category.ops.component';
import {MerchantCategoryRouteModule} from './route/merchant-category.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [MerchantCategoryIndexComponent, MerchantCategoryListComponent, MerchantCategoryOpsComponent],
    imports: [SharedModule, MerchantCategoryRouteModule]
})
export class MerchantCategoryModule {
}
