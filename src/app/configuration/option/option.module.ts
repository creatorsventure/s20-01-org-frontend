import {NgModule} from '@angular/core';
import {OptionIndexComponent} from './index/option.index.component';
import {OptionListComponent} from './list/option.list.component';
import {OptionOpsComponent} from './ops/option.ops.component';
import {OptionRouteModule} from './route/option.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({declarations: [OptionIndexComponent, OptionListComponent, OptionOpsComponent], imports: [SharedModule, OptionRouteModule]})
export class OptionModule {
}
