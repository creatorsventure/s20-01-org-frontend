import {NgModule} from '@angular/core';
import {SchemeIndexComponent} from './index/scheme.index.component';
import {SchemeListComponent} from './list/scheme.list.component';
import {SchemeOpsComponent} from './ops/scheme.ops.component';
import {SchemeRouteModule} from './route/scheme.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({declarations: [SchemeIndexComponent, SchemeListComponent, SchemeOpsComponent], imports: [SharedModule, SchemeRouteModule]})
export class SchemeModule {
}
