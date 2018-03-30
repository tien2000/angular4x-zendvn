import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SettingTemplateComponent } from './setting-template/setting-template.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleThree { }
