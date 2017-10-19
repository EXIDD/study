import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-built-in-validator',
    templateUrl: './built-in-validator.component.html',
    styleUrls: ['./built-in-validator.component.css']
})
export class BuiltInValidatorComponent implements OnInit {
    user = {
        userId: '',
        userName: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

}
