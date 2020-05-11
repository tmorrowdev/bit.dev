import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DialogService } from '../../services/dialog.service';
import { DialogFactoryService } from '../../services/dialog-factory.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [DialogFactoryService, DialogService]
})
export class ButtonModule {}