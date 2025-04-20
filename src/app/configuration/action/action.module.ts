import {NgModule} from '@angular/core';
import {ActionIndexComponent} from './index/action.index.component';
import {ActionListComponent} from './list/action.list.component';
import {ActionOpsComponent} from './ops/action.ops.component';
import {ActionRouteModule} from './route/action.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({declarations: [ActionIndexComponent, ActionListComponent, ActionOpsComponent], imports: [SharedModule, ActionRouteModule]})
export class ActionModule {
}
