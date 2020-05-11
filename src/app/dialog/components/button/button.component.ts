import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dialog-button',
  styleUrls: ['button.component.scss'],
  template: `
    <button mat-raised-button [color]="color" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
  encapsulation: ViewEncapsulation.Native

})
export class ButtonComponent {
  @Input() color = 'default';
  @Input() disabled = false;
}
