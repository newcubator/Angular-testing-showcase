import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ts-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input()
    disabled = false;

    @Input()
    label = '';

    @Input()
    type: 'button' | 'submit' | 'reset' = 'button';

    @Output()
    clicked: EventEmitter<void> = new EventEmitter<void>();
}
