import {NgModule} from '@angular/core';
import {PermissionIndexComponent} from './index/permission.index.component';
import {PermissionListComponent} from './list/permission.list.component';
import {PermissionOpsComponent} from './ops/permission.ops.component';
import {PermissionRouteModule} from './route/permission.route.module';
import {SharedModule} from '../../shared/shared.module';
import {NzSpinComponent} from "ng-zorro-antd/spin";

@NgModule({
    declarations: [PermissionIndexComponent, PermissionListComponent, PermissionOpsComponent],
    imports: [SharedModule, PermissionRouteModule, NzSpinComponent]
})
export class PermissionModule {
}
