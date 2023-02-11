import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<h1>Exercises Angular {{name}} </h1>`,
  styles: [`h1 { font-family: Arial; }`]
})
export class HeaderComponent  {
  @Input() name: string;
}
