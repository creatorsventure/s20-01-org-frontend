import {NgModule} from '@angular/core';
import {EngineIndexComponent} from './index/engine.index.component';
import {EngineListComponent} from './list/engine.list.component';
import {EngineOpsComponent} from './ops/engine.ops.component';
import {EngineRouteModule} from './route/engine.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({declarations: [EngineIndexComponent, EngineListComponent, EngineOpsComponent], imports: [SharedModule, EngineRouteModule]})
export class EngineModule {
}
