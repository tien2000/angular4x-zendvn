import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SettingTemplateComponent } from './setting-template/setting-template.component';
import { VoteStatusComponent } from './vote-status/vote-status.component';
import { FormValidateComponent } from './form-validate/form-validate.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingTemplateComponent,
    VoteStatusComponent,
    FormValidateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleThree { }
