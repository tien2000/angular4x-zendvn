import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'tls-ng-class',
    templateUrl: './ng-class.component.html'
})

export class NgClassComponent {
    isList : boolean = true;
    // currentClasses: {};
    
    setCurrentClasses() {
        // this.currentClasses =  {                 // Not Working???
        //     'glyphicon-th'        : !this.isList,
        //     'glyphicon-th-list'   : this.isList
        // };

        return {
            'glyphicon-th'        : !this.isList,
            'glyphicon-th-list'   : this.isList
        }
    }
}