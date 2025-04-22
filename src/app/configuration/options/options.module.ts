import {NgModule} from '@angular/core';
import {OptionsIndexComponent} from './index/options.index.component';
import {OptionsListComponent} from './list/options.list.component';
import {OptionsOpsComponent} from './ops/options.ops.component';
import {OptionsRouteModule} from './route/options.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({declarations: [OptionsIndexComponent, OptionsListComponent, OptionsOpsComponent], imports: [SharedModule, OptionsRouteModule]})
export class OptionsModule {
}
