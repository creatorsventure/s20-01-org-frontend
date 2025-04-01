import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {ValidatorsModule} from 'ngx-validators';
import {ModuleDatatableComponent} from './modue-datatable/module.datatable.component';
import {ModuleIndexComponent} from './module-index/module-index.component';
import {FormInputComponent} from './form-input/form.input.component';
import {FieldErrorsComponent} from './field-errors/field-errors.component';
import {FormGeneralComponent} from './form-general/form.general.component';
import {FormSubmitButtonsComponent} from './form-submit-buttons/form-submit-buttons.component';
import {FormAuditComponent} from './form-audit/form-audit.component';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {FormSelectOneComponent} from './form-select-one/form.selectone.component';
import {FormNumericComponent} from './form-numeric/form.numeric.component';
import {FormEmailComponent} from './form-email/form.email.component';
import {FormPasswordComponent} from './form-password/form.password.component';
import {FormSelectManyComponent} from './form-select-many/form.selectmany.component';
import {FormPhoneComponent} from './form-phone/form.phone.component';

const antdModule = [
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzToolTipModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzAvatarModule,
    NzIconModule,
    NzDividerModule,
    NzTableModule,
    NzPopconfirmModule,
    NzTagModule,
    NzEmptyModule,
    NzBadgeModule
];

@NgModule({
    declarations: [
        ModuleIndexComponent,
        ModuleDatatableComponent,
        FormInputComponent,
        FormNumericComponent,
        FormEmailComponent,
        FormPasswordComponent,
        FormPhoneComponent,
        FormSelectOneComponent,
        FormSelectManyComponent,
        FormGeneralComponent,
        FieldErrorsComponent,
        FormSubmitButtonsComponent,
        FormAuditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule,
        ValidatorsModule,
        ...antdModule,
    ],
    exports: [
        ModuleIndexComponent,
        ModuleDatatableComponent,
        FormInputComponent,
        FormNumericComponent,
        FormEmailComponent,
        FormPasswordComponent,
        FormPhoneComponent,
        FormSelectOneComponent,
        FormSelectManyComponent,
        FormGeneralComponent,
        FormSubmitButtonsComponent,
        FormAuditComponent,
        FieldErrorsComponent
    ],
})
export class AppComponentsModule {
}
