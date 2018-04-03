import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SettingTemplateComponent } from './setting-template/setting-template.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleThree { }
