import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  public altura:string
  mensaje: string = 'Este es el hijo';
 
ngOnInit(){
 
}

  saludo(value) {
    this.mensaje = value;
  }
  
}