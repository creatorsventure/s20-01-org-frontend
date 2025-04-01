import {NgModule} from '@angular/core';
import {OrganizationIndexComponent} from './index/organization.index.component';
import {OrganizationListComponent} from './list/organization.list.component';
import {OrganizationOpsComponent} from './ops/organization.ops.component';
import {OrganizationRouteModule} from './route/organization.route.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [OrganizationIndexComponent, OrganizationListComponent, OrganizationOpsComponent],
    imports: [SharedModule, OrganizationRouteModule]
})
export class OrganizationModule {
}
