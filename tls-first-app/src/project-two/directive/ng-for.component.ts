import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'tls-ng-for',
    templateUrl: './ng-for.component.html'
})

export class NgForComponent {
    courses : string[] = ["TypeScript", "Angular 4x", "Wordpress", "jQuery Master"];
}