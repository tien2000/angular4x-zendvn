import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'tls-binding',
    templateUrl: './binding.component.html'
})
export class BindingComponent {
    title : string = "Binding Component";
    personObj : any = {name : 'TienLS', age : 28};
    link : string = "https://angular.io/guide/template-syntax";
    isActive: boolean = true;

    showInfo(): string{
        return this.personObj.name + " - " + this.personObj.age;
    }
}