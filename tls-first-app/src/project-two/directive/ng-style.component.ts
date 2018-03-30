import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'tls-ng-style',
    templateUrl: './ng-style.component.html'
})

export class NgStyleComponent {
    canSave : boolean = true;
    isUnchanged : boolean = true;
    isSpecial : boolean = true;
    currentStyles: {};

    setCurrentStyles() {
        // this.currentStyles = {
        //     'font-style':  this.canSave      ? 'italic' : 'normal',
        //     'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
        //     'font-size':   this.isSpecial    ? '24px'   : '12px'
        // };

        return {
            'font-style':  this.canSave      ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
            'font-size':   this.isSpecial    ? '24px'   : '12px'
        };
    }
}