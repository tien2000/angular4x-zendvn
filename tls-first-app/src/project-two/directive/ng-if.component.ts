import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'tls-ng-if',
    templateUrl: './ng-if.component.html'
})

export class NgIfComponent {    
    isActive : boolean = true;
    isSpecial: boolean = false;
}