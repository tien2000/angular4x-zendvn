import { Component } from '@angular/core';
import * as $ from 'jquery';

interface People{
    name    : string;
    email   : string;
}

@Component({
    moduleId : module.id,
    selector: 'tls-form-validate',
    templateUrl: './form-validate.component.html'
})

export class FormValidateComponent {
    title       : string        = "";
    txtHeader   : string        = "";
    peopleInfo  : People;
    elemts      : string[]      = [];
    validName   : boolean;
    validEmail  : boolean;
    onSubmit    : boolean;

    constructor(){
        this.title              = "Exercise 2 - Form Validate";
        this.txtHeader          = "Form Validate";
        this.peopleInfo         = {"name" : "" , "email" : ""};
        this.elemts             = ["name", "email"];
        this.validName          = true;
        this.validEmail         = true;
        this.onSubmit           = false;
    }

    showLabel(label : string) : string{
        return label.charAt(0).toUpperCase() + label.slice(1);
    }

    onInputChange($event, type : string){
        if(type == "name"){
            this.peopleInfo.name = $event.target.value;            
        } else if (type == "email") {
            this.peopleInfo.email = $event.target.value;
        }
    }
    
    onSubmitForm(){
        this.validName  = false;
        this.validEmail = false;
        this.onSubmit   = true;

        if (this.peopleInfo.name.length > 4) {
            this.validName = true;
        }

        let partern : any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (partern.test(this.peopleInfo.email) == true) {
            this.validEmail = true;      
        }
    }    

    private isEmpty(val : string) : boolean{
        if (val.length > 0 ) return false;
        return true;
    }

    setDisabledButton() : boolean{
        return (this.isEmpty(this.peopleInfo.name) || this.isEmpty(this.peopleInfo.email));
    }

    showGlyphiconOK(type : string){
        if (type == "name")
            return (this.onSubmit == true && this.validName == true);            
        return (this.onSubmit == true && this.validEmail == true);
    }

    showGlyphiconError(type : string){
        if (type == "name")
            return (this.onSubmit == true && this.validName == false);            
        return (this.onSubmit == true && this.validEmail == false);
    }

    setClass(type : string){
        let valid : boolean = false;
        
        if(type == "name"){
            valid = this.validName;
        }else if (type == "email") {
            valid = this.validEmail;
        }

        if (this.onSubmit == true) {
            return {
                "has-feedback"  : this.onSubmit,
                "has-success"   : valid,
                "has-warning"   : !valid
            };
        }

        return null;
    }
}