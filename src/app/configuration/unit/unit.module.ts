import {NgModule} from '@angular/core';
import {UnitIndexComponent} from './index/unit.index.component';
import {UnitListComponent} from './list/unit.list.component';
import {UnitOpsComponent} from './ops/unit.ops.component';
import {UnitRouteModule} from './route/unit.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({declarations: [UnitIndexComponent, UnitListComponent, UnitOpsComponent], imports: [SharedModule, UnitRouteModule]})
export class UnitModule {
}
