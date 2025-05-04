import {Component, OnInit} from '@angular/core';
import {OpsAbstract} from '../../../shared/abstract/ops.abstract';
import {ActivatedRoute, Router} from '@angular/router';
import {CRUDService} from '../../../shared/services/crud.service';
import {FormBuilder} from '@angular/forms';
import {AppControlService} from '../../../shared/services/app.control.service';
import {AlertService} from '../../../shared/services/alert.service';
import {API_METHOD, APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {CONTROL_DESCRIPTION} from '../../../shared/constant/control.constant';
import {unitTypeOptions} from '../../../shared/constant/org.constant';

@Component({selector: 'app-unit-ops', templateUrl: './unit.ops.component.html', styles: [], standalone: false})
export class UnitOpsComponent extends OpsAbstract implements OnInit {
    actionIdNameMap: Map<string, string>;
    currencyIdNameMap: Map<string, string>;
    engineIdNameMap: Map<string, string>;
    optionsIdNameMap: Map<string, string>;
    unitTypeOptions = unitTypeOptions;

    constructor(public override fb: FormBuilder,
                public override activatedRoute: ActivatedRoute,
                public override crudService: CRUDService,
                public override appCtrlService: AppControlService,
                public override alertService: AlertService,
                public override router: Router) {
        super(fb, activatedRoute, crudService, appCtrlService, alertService, router);
    }

    ngOnInit(): void {
        super.init();
        this.crudForm = this.fb.group({
            unitCode: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.input, this.object?.unitCode),
            unitId: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.numeric, this.object?.unitId),
            legalName: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.input, this.object?.legalName, false),
            address: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.inputSpecial, this.object?.address),
            bankIdentificationCode: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.input, this.object?.bankIdentificationCode),
            adminName: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.input, this.object?.adminName),
            adminEmail: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.email, this.object?.adminEmail),
            adminUserId: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.code, this.object?.adminUserId),
            adminMobileNumber: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.phone, this.object?.adminMobileNumber),
            adminCountryCode: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.phone, this.object?.adminCountryCode),
            type: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectOne, this.object?.type),
            selectedActionIds: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectMany, this.object?.selectedActionIds),
            selectedCurrencyIds: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectMany, this.object?.selectedCurrencyIds),
            selectedEngineIds: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectMany, this.object?.selectedEngineIds),
            selectedOptionsId: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectOne, this.object?.selectedOptionsId),
        });
        this.crudService.getData(APP_NAVIGATION.action + API_METHOD.idNameMap).subscribe(idNameMap => {
            this.actionIdNameMap = idNameMap;
        });
        this.crudService.getData(APP_NAVIGATION.currency + API_METHOD.idNameMap).subscribe(idNameMap => {
            this.currencyIdNameMap = idNameMap;
        });
        this.crudService.getData(APP_NAVIGATION.engine + API_METHOD.idNameMap).subscribe(idNameMap => {
            this.engineIdNameMap = idNameMap;
        });
        this.crudService.getData(APP_NAVIGATION.options + API_METHOD.idNameMap).subscribe(idNameMap => {
            this.optionsIdNameMap = idNameMap;
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
