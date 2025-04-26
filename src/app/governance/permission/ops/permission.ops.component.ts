import {Component, OnInit} from '@angular/core';
import {OpsAbstract} from '../../../shared/abstract/ops.abstract';
import {ActivatedRoute, Router} from '@angular/router';
import {CRUDService} from '../../../shared/services/crud.service';
import {FormBuilder} from '@angular/forms';
import {AppControlService} from '../../../shared/services/app.control.service';
import {AlertService} from '../../../shared/services/alert.service';
import {APP_NAVIGATION} from '../../../shared/routes/navigation.constant';
import {CONTROL_DESCRIPTION} from '../../../shared/constant/control.constant';

@Component({selector: 'app-permission-ops', templateUrl: './permission.ops.component.html', styles: [], standalone: false})
export class PermissionOpsComponent extends OpsAbstract implements OnInit {
    public isObjectReady: boolean = false;

    constructor(
        public override fb: FormBuilder,
        public override activatedRoute: ActivatedRoute,
        public override crudService: CRUDService,
        public override appCtrlService: AppControlService,
        public override alertService: AlertService,
        public override router: Router) {
        super(fb, activatedRoute, crudService, appCtrlService, alertService, router);
    }

    ngOnInit(): void {
        super.init();

        if (this.crudOps === APP_NAVIGATION.permissions.edit || this.crudOps === APP_NAVIGATION.permissions.view) {
            const id = this.activatedRoute.snapshot.params['id'];
            this.loadData(id);
        } else {
            this.initializeForm(); // empty form for add
        }
    }

    private loadData(id: string): void {
        this.crudService.read('permission', [{ key: 'id', value: id }]).subscribe({
            next: (data) => {
                this.object = data;
                this.isObjectReady = true;
                this.initializeForm(data);

                if (this.crudOps === APP_NAVIGATION.permissions.view) {
                    this.crudForm.disable();
                }
            },
            error: (err) => {
                console.error('Failed to load data', err);
                this.alertService.error('app.message.failure.f001', true);
                this.router.navigate(['/error']);
            }
        });
    }

    private initializeForm(data?: any): void {
        this.crudForm = this.fb.group({
            permissionCode: this.appCtrlService.generateFormControl(
                CONTROL_DESCRIPTION.input,
                data?.permissionCode || null
            )
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
