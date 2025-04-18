import {Component, OnInit} from '@angular/core';
import {OpsAbstract} from '../../../shared/abstract/ops.abstract';
import {ActivatedRoute} from '@angular/router';
import {CRUDService} from '../../../shared/services/crud.service';
import {FormBuilder} from '@angular/forms';
import {AppControlService} from '../../../shared/services/app.control.service';
import {AlertService} from '../../../shared/services/alert.service';
import {API_METHOD, APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {CONTROL_DESCRIPTION} from '../../../shared/constant/control.constant';

@Component({selector: 'app-user-ops', templateUrl: './user.ops.component.html', styles: [], standalone: false})
export class UserOpsComponent extends OpsAbstract implements OnInit {
    public permissions: any = APP_NAVIGATION.permissions;
    public roleIdNameMap: Map<string, string>;

    constructor(
        public override fb: FormBuilder,
        public override activatedRoute: ActivatedRoute,
        public override crudService: CRUDService,
        public override appCtrlService: AppControlService,
        public override alertService: AlertService) {
        super(fb, activatedRoute, crudService, appCtrlService, alertService);
    }

    ngOnInit(): void {
        super.init();
        this.crudForm = this.fb.group({
            userId: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.input, this.object?.userId),
            mobileNumber: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.phone, this.object?.mobileNumber),
            countryCode: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.phone, this.object?.countryCode),
            email: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.email, this.object?.email),
            selectedRoleIds: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectMany, this.object?.selectedRoleIds)
        });
        this.crudService.getData(APP_NAVIGATION.role + API_METHOD.idNameMap).subscribe(idNameMap => {
            this.roleIdNameMap = idNameMap;
        });
    }

    override customUpdateValidations(): boolean {
        return true;
    }

    override customCreateValidations(): boolean {
        return true;
    }

    override customPostSuccessOps(): void {
    }

    override customPostFailureOps(): void {
    }
}
