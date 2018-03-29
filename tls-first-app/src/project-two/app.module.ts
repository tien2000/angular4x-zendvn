import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubComponent } from "./multi-component/sub.component";
import { StudyMultiAbcComponent } from "./multi-component/study-multi-abc.component";


@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    StudyMultiAbcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleTwo { }
