import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SubComponent } from "./multi-component/sub.component";
import { StudyMultiAbcComponent } from "./multi-component/study-multi-abc.component";
import { BindingComponent } from "./binding/binding.component";
import { EventBindingComponent } from "./binding/event-binding.component";
import { TwoWayBindingComponent } from "./binding/two-way-binding.component";
import { NgIfComponent } from "./directive/ng-if.component";
import { NgForComponent } from "./directive/ng-for.component";
import { NgSwitchComponent } from "./directive/ng-switch.component";


@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    StudyMultiAbcComponent,
    BindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleTwo { }
