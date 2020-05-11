import { Component, ViewChild, TemplateRef, Input, ViewContainerRef } from '@angular/core';
import { DialogService } from './dialog/services/dialog.service';
import { DialogFactoryService } from './dialog/services/dialog-factory.service';
import { DialogData } from './dialog/models/dialog-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() template: DialogData<any>;

  dialogService: DialogService;


  constructor(private dialogFactoryService: DialogFactoryService) {}

  dispatchDialog() {
    this.openDialog({
      title: this.template.title,
      template: this.template.template
    });
  }

  changeDialogTemplate(template: TemplateRef<any>) {
      this.dialogService.setTemplate(template);
  }

  closeDialog() {
    this.dialogService.close();
  }

  private openDialog(dialogData: DialogData): void {
    this.dialogService = this.dialogFactoryService.open(dialogData);
  }
}
