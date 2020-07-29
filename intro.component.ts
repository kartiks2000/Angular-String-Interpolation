import { Component } from '@angular/core';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent{
    hel = "this is the interpolated text"
}