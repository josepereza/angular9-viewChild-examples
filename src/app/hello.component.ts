import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  public variablehello:string="Una variable de HelloComponent"
  impresion1(){
    console.log("Hola campeon")
  }
  impresion2(){
    return ("Hola Jose campeon")
   
  }
}