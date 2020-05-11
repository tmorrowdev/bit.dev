import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { createCustomElement} from '@angular/elements';
import { ButtonComponent } from './dialog/components/button/button.component';
import { DialogComponent } from './dialog/components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './dialog/components/button/button.module';
import { DialogModule } from './dialog/components/dialog/dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ButtonModule,
    DialogModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [ButtonComponent, DialogComponent]
})
export class AppModule{
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const buttonElement = createCustomElement(ButtonComponent, {
      injector:this.injector
    });
    customElements.define('button-element', buttonElement);

    const dialogElement = createCustomElement(DialogComponent, {
      injector:this.injector
    });
    customElements.define('dialog-element', dialogElement);
  }
}
