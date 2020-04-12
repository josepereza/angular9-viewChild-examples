import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import { HelloComponent } from './hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  name = 'App-Angular9-viewChild';
  dato: string;
  altura: string = "20px";
  @ViewChild(HelloComponent, { static: false }) hello: HelloComponent;

  @ViewChild('pRef', { static: false }) pRef: ElementRef;
  ngOnInit() {
    (document.querySelector('#padre') as HTMLElement).style.backgroundColor = "orange";
    (document.querySelector('#padre') as HTMLElement)
      .addEventListener('mouseover', this.cambiarcolor);




  }
  ngAfterViewInit() {
    this.prueba();
    console.log('Hello ', this.hello.name);
    this.hello.impresion1();

    console.log(this.pRef.nativeElement.innerHTML);
    this.pRef.nativeElement.innerHTML = "DOM updated succesfully!!!";
    this.dato = this.hello.impresion2();
    this.pRef.nativeElement.innerHTML += `<h2>${this.dato}</h2>`;

  }

  prueba() {

    console.log(this.hello.variablehello)
  }
  cambiarcolor() {

    (document.querySelector('#padre') as HTMLElement).style.backgroundColor = "green";
    (document.querySelector('#padre') as HTMLElement).style.color = "white";

  }
  cambioaltura1() {
    this.altura = "40px"
  }
  cambioaltura2() {
    this.altura = "20px"
  }
}