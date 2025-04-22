import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({selector: 'app-option-index', templateUrl: './options.index.component.html', styles: [], standalone: false})
export class OptionsIndexComponent implements OnInit {
    constructor(public acRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
    }
}
