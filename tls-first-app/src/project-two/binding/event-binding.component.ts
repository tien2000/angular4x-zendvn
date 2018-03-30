import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    moduleId : module.id,
    selector: 'tls-event-binding',
    templateUrl: './event-binding-component.html',
})
export class EventBindingComponent {
    btnInfo(): void {
        alert("Hello TypeScript");
    }

    btnDanger($event): void {
        alert("Hello Angular4x");
        console.log($event);
    }

    btnClick($event) : void{
        $event.stopPropagation();
        console.log('btnClick();');
    }

    divClick($event) : void {
        console.log('divClick();');
    }

    onKeyUp(event) : void {
        if (event.keyCode == 13) {
            // console.log(event.target.value);            
            $("p#result-tag").append('<span class="label label-info">'+ event.target.value + '</span> ');
            event.target.value = "";            
            
        }

        // console.log('onKeyUp();');
    }
}