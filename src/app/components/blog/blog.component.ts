import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Notinueva } from 'src/app/interfaces/notinueva.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  titulo: string = "";
  imagen: string = "";
  texto: string ="";
  fecha: any = "";
  noticias: any[]=[];
  ArrNoticias: any[] = [];
  newNoti: Notinueva [] = [];

  @Output() tituloEnviado: EventEmitter<string>;/* Esta propiedad debe estar decorada con @output */
  @Output() imagenEnviada: EventEmitter<string>;
  @Input() arraynoticias: any[] = [];

  constructor(){
    this.tituloEnviado = new EventEmitter();
    this.imagenEnviada = new EventEmitter();
    this.ArrNoticias = new Array(
      { titulo: "La capitán piloto aviador salvadoreña fallecida en África Occidental será sepultada este sábado en Santa Ana", imagen:"https://www.laprensagrafica.com/export/sites/prensagrafica/img/2023/02/11/signal-2023-02-11-112835.jpeg_1853007781.jpeg", texto: "Este sábado, parientes y amistades despedirán a la capitán piloto aviador María Elena Mendoza Quan de Rivas, quien falleció el pasado 29 de enero del 2023, en un hospital de Bamako, República de Mali, en África Occidental, aparentemente a causa de un paro cardiorespiratorio. La sepultura se realizará en el parque Jardín La Flores del municipio de Santa Ana a las 3:00 pm. La familia de Mendoza ha planeado un sobrevuelo en la ceremonia para rendir un homenaje a su desepeño en la aviación", fecha: "11/02/2023"}, {titulo: "ISTU realizará «Noche bajo las estrellas» en Parque Natural Cerro Verde", imagen:"https://diarioelsalvador.com/wp-content/uploads/2023/02/web-1-4.jpg",texto: "El Instituto Salvadoreño de Turismo (ISTU), en el marco de la celebración del «Día del Amor y la Amistad», realizará este próximo fin de semana la actividad: «Noche bajo las estrellas», en el Parque Natural Cerro Verde, ubicado en el departamento de Santa Ana. Con este evento, se arranca este 2023, cargado de muchas aventuras y diversión para todas las familias salvadoreñas. Con «Noche bajo las estrellas», buscamos brindar sana recreación a los participantes. El evento, dará inicio a las 4 de la tarde con una variada agenda de actividades pensadas especialmente para ser realizadas y compartidas en familia. Los turistas que asistan, podrán hacer uso de una cabina de fotos completamente gratis para que puedan llevarse un bonito recuerdo impreso de su participación en esta actividad.", fecha: "11/02/2023"}, );
  }

  ngOnInit(): void{

  }

  cargarDatos(): string{
    let resultado = "";

    this.ArrNoticias.forEach(noti=>{
      resultado+= `<article class="articleWrapper"><h3 class="titulonoti">${noti.titulo}</h3><div class='imagenwrapper' ><img class='imagennoti' src='${noti.imagen}'></div><p class="textonoti">${noti.texto}</p class="fechanoti"><p>${noti.fecha}</p></article>`
    })
    
    return resultado;

  }
 
  recogerDatos(){
    let lenArray = this.ArrNoticias.length;
    if(this.titulo != "" && this.imagen != "" && this.texto != "" && this.fecha != ""){
      console.log(this.titulo);
      console.log(this.imagen);
      console.log(this.texto);
      console.log(this.fecha);
      this.tituloEnviado.emit(this.titulo);
      this.imagenEnviada.emit(this.imagen);
      console.log(lenArray);

      let newNoti: Notinueva = {
        titulo: this.titulo,
        imagen: this.imagen,
        texto: this.texto,
        fecha: this.fecha
      }
 
      
      this.ArrNoticias.push(newNoti);
      console.log(this.ArrNoticias);
      this.titulo = "";
      this.imagen = "";
      this.texto = "";
      this.fecha = "";
    } else{
        alert('Los campos no pueden ser vacios, favor rellenarlos correctamente.')
      }

  }

  guardarDato($event: any) : void {
    this.ArrNoticias.push($event);
  }

}
