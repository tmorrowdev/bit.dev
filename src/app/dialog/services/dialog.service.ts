import { TemplateRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

// Components
import { DialogComponent } from '../components/dialog/dialog.component';

type DialogRef<T> = MatDialogRef<DialogComponent<T>>;

export class DialogService<T = undefined> {
  opened$ = this.dialogRef.afterOpened().pipe(first());

  constructor(private dialogRef: DialogRef<T>) {}

  get context() {
    return this.dialogRef.componentInstance.data.context;
  }

  close() {
    this.dialogRef.close();
  }

  setHeaderText(title: string): void {
    this.dialogRef.componentInstance.data.title = title;
  }

  setTemplate(template: TemplateRef<any>): void {
    this.dialogRef.componentInstance.data.template = template;
  }
}
