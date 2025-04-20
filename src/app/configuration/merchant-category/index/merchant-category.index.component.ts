import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({selector: 'app-merchantCategory-index', templateUrl: './merchant-category.index.component.html', styles: [], standalone: false})
export class MerchantCategoryIndexComponent implements OnInit {
    constructor(public acRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
    }
}
