import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'tls-ng-switch',
    templateUrl: './ng-switch.component.html'
})

export class NgSwitchComponent {
    // toChoise : string = "happy";

    tab : string = "profile";

    changeTab(tabcurrent : string): void {
        this.tab = tabcurrent;
    }
}