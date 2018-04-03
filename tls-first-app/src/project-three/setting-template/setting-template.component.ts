import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'tls-setting-template',
    templateUrl: './setting-template.component.html'
})

export class SettingTemplateComponent {
    txtContent      : string = "";
    txtColor        : string = "";
    bgColor         : string = "";
    currentTemplate : string = "";


    constructor(){
        this.txtContent = "Angular 4x is not fun :(";
        this.txtColor   = "#ffffff";
        this.bgColor    = "#000000";
        this.currentTemplate = "optBlue";
    }

    changeTemplate($event){
        this.currentTemplate = $event.target.value;
        console.log(this.currentTemplate);
    }

    changeBgColor($event){
        this.bgColor = $event.target.value;
    }

    changeTxtColor($event){
        this.txtColor = $event.target.value;
    }

    setCurrentStyles() {
        return {
            'background-color' :  this.bgColor,
            'color'            :  this.txtColor,
        };
    }
}