import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad5';
  titulo: string = "";
  imagen: string = "";
  texto: string ="";
  fecha: any = "";
  noticias: any[]=[];
  iUrl: string="";
  
  guardarDato($event: string) : void {
    this.noticias.push($event);
  }

  /* pintarImagen($event: string): void{ */
    /* this.iUrl = $event; */
    /* this.iUrl = $event;
    this.pintarContenido();
  } */

  /* pintarContenido() : string{
    return `<figure>
              <img src="${this.iUrl}">
              <figcaption>Perrito Feli</figcaption>
            </figure>`
  } */
 }

