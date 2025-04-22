import {Component, OnInit} from '@angular/core';
import {OpsAbstract} from '../../../shared/abstract/ops.abstract';
import {ActivatedRoute, Router} from '@angular/router';
import {CRUDService} from '../../../shared/services/crud.service';
import {FormBuilder} from '@angular/forms';
import {AppControlService} from '../../../shared/services/app.control.service';
import {AlertService} from '../../../shared/services/alert.service';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {engineTypeOptions} from '../../../shared/constant/org.constant';
import {CONTROL_DESCRIPTION} from '../../../shared/constant/control.constant';

@Component({selector: 'app-engine-ops', templateUrl: './engine.ops.component.html', styles: [], standalone: false})
export class EngineOpsComponent extends OpsAbstract implements OnInit {
    public engineTypeOptions: Map<number, string> = engineTypeOptions;

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
            type: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.selectOne, this.object?.type),
            serviceURL: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.url, this.object?.serviceURL),
            timeout: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.numeric, this.object?.timeout),
            priority: this.appCtrlService.generateFormControl(CONTROL_DESCRIPTION.numeric, this.object?.priority),
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
