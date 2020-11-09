import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-keyboard-key',
    templateUrl: './keyboard-key.component.html',
    styleUrls: ['./keyboard-key.component.scss'],
})
export class KeyboardKeyComponent implements OnInit {

    @Input() key: string;
    @Input() hasIcon: boolean = false;
    @Input() icon: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
