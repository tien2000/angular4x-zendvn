import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubComponent } from "./multi-component/sub.component";
import { StudyMultiAbcComponent } from "./multi-component/study-multi-abc.component";
import { BindingComponent } from "./binding/binding.component";


@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    StudyMultiAbcComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleTwo { }
