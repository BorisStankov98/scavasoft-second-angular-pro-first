import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-remember-me',
    template:`
        <label>
            <input type="checkbox" (change)="onChecked($event)" >
        </label>
        `
})

export class RememberMeComponent{
    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>()

    onChecked(value:Event){
        const { target } = value
        const emmitValue=((target as HTMLInputElement).checked)
        this.checked.emit( emmitValue )
    }
} 